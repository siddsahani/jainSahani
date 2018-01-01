package com.projectx.lambda

import com.amazonaws.services.lambda.runtime.Context
import com.amazonaws.services.lambda.runtime.LambdaLogger
import com.amazonaws.services.lambda.runtime.RequestStreamHandler
import com.google.gson.Gson
import com.google.gson.JsonObject
import com.google.gson.JsonParser
import com.google.gson.JsonPrimitive
import com.mongodb.MongoClient
import com.mongodb.client.MongoDatabase
import com.mongodb.MongoClientURI
import com.mongodb.util.JSON
import com.projectx.pojo.restmodels.UserInfoModel
import com.projectx.repository.UserRepository
import java.io.*

class GetUsersLambda : RequestStreamHandler {

    private lateinit var logger: LambdaLogger
    private var mongoDb: MongoDatabase

    // TODO : Move this to environment variable.
    private val MONGO_DB_CONNECTION_STRING = "mongodb://jainsahani:JainSahani%401234@projectxcluster-shard-00-00-rdihp.mongodb.net:27017,projectxcluster-shard-00-01-rdihp.mongodb.net:27017,projectxcluster-shard-00-02-rdihp.mongodb.net:27017/test?ssl=true&replicaSet=ProjectXCluster-shard-0&authSource=admin"

    companion object {
        lateinit var parser: JsonParser
    }

    init {
        parser = JsonParser()
        val uri = MongoClientURI(MONGO_DB_CONNECTION_STRING)
        mongoDb = MongoClient(uri).getDatabase("projectX")
    }

    override fun handleRequest(inputStream: InputStream, outputStream: OutputStream, context: Context) {

        logger = context.logger
        logger.log("Loading Lambda handler of GetUsersLambda")

        var event = getInputStreamObject(inputStream)
        event = event?.getAsJsonObject("pathParameters")
        val userId = event?.getAsJsonPrimitive("userid")?.asString

        if (userId != null) {
            val userRepo = UserRepository(mongoDb.getCollection("userRepo"))

            logger.log("Fetching User Details for UserId : {$userId}")
            val userInfo = userRepo.findByUserId(userId)

            userInfo?.let {
                logger.log("User Details Retrieved Successfully for UserId : {$userId}")
                returnSuccessResponse(userInfo, outputStream)
                return
            }
        }

        logger.log("Retrieving User Details Failed for UserId : {$userId}")
        returnFailureResponse(userId, outputStream)
    }

    private fun returnFailureResponse(userId: String?, outputStream: OutputStream) {

        val responseJson = JsonObject()

        val responseBody = JsonObject()
        responseBody.addProperty("output", "Some Unknown Error Occured")
        responseBody.addProperty("message", "Failure")
        responseJson.addProperty("statusCode", 400)
        responseJson.add("body", responseBody)

        addResponseHeader(responseJson)

        writeToOutputStream(outputStream, responseJson)
    }

    private fun returnSuccessResponse(userInfo: UserInfoModel, outputStream: OutputStream) {

        val responseJson = JsonObject()
        val output = Gson().toJsonTree(userInfo)

        val responseBody = JsonObject()
        responseBody.add("output", output)
        responseBody.addProperty("message", "Success")
        responseJson.addProperty("statusCode", 200)
        responseJson.addProperty("body", responseBody.toString())

        addResponseHeader(responseJson)

        writeToOutputStream(outputStream, responseJson)
    }

    private fun writeToOutputStream(outputStream: OutputStream, responseJson: JsonObject) {
        val writer = OutputStreamWriter(outputStream, "UTF-8")
        writer.write(responseJson.toString())
        writer.close()

        logger.log("Response : {${responseJson.toString()}}")
    }

    private fun addResponseHeader(responseJson: JsonObject) {
        val headerJson = JsonObject()
        headerJson.addProperty("x-custom-response-header", "my custom response header value")
        headerJson.addProperty("Access-Control-Allow-Origin", "*")
        responseJson.add("headers", headerJson)
    }


    fun getInputStreamObject(inputStream: InputStream) : JsonObject? {
        return try {
            val reader = BufferedReader(InputStreamReader(inputStream))
            parser.parse(reader).asJsonObject
        } catch (ex : IllegalStateException) {
            logger.log("IllegalStateException occurred while parsing InputStream," +
                    " Exception [${ex.message}]")
            throw ex
        } catch (ex : Exception) {
            logger.log("Unknown occurred while parsing InputStream," +
                    " Exception [${ex.message}]")
            throw ex
        }
    }
}
