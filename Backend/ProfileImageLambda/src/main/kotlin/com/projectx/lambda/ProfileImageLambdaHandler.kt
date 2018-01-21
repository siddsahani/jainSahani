package com.projectx.lambda

import com.amazonaws.services.lambda.runtime.Context
import com.amazonaws.services.lambda.runtime.RequestHandler
import com.amazonaws.services.s3.AmazonS3
import com.amazonaws.services.s3.AmazonS3Builder
import com.amazonaws.services.s3.AmazonS3Client
import com.amazonaws.services.s3.AmazonS3ClientBuilder
import com.mongodb.MongoClient
import com.mongodb.MongoClientURI
import com.mongodb.client.MongoDatabase
import com.projectx.factory.HTTPRequestHandlerFactory
import com.projectx.repository.ImageUploadRepo
import com.projectx.utils.ResponseGenerator
import com.projectx.utils.impl.AWSLogger
import main.kotlin.com.projectx.utils.APIGatewayRequestDeserializer

class ProfileImageLambdaHandler : RequestHandler<String, String> {

    private lateinit var logger: AWSLogger

    private var mongoDb: MongoDatabase

    private var httpRequestHandlerFactory: HTTPRequestHandlerFactory

    private var responseGenerator : ResponseGenerator

    private var s3Client: AmazonS3

    // TODO : Move this to environment variable.
    private val MONGO_DB_CONNECTION_STRING = "mongodb://jainsahani:JainSahani%401234@projectxcluster-shard-00-00-rdihp.mongodb.net:27017,projectxcluster-shard-00-01-rdihp.mongodb.net:27017,projectxcluster-shard-00-02-rdihp.mongodb.net:27017/test?ssl=true&replicaSet=ProjectXCluster-shard-0&authSource=admin"

    init {
        val uri = MongoClientURI(MONGO_DB_CONNECTION_STRING)
        mongoDb = MongoClient(uri).getDatabase("projectX")
        httpRequestHandlerFactory = HTTPRequestHandlerFactory()
        responseGenerator = ResponseGenerator
        s3Client = AmazonS3ClientBuilder.defaultClient()
    }

    override fun handleRequest(inputStream: String, context: Context) : String {

        logger = AWSLogger.getInstance(context.logger)
        logger.logInfo("Loading Lambda handler of ProfileImageLambda")

        var event = APIGatewayRequestDeserializer.parse(inputStream)
        logger.logInfo(event.toString())

        event?.let {
            val method = event.getAsJsonPrimitive("httpMethod")
            val httpRequestHandler = httpRequestHandlerFactory.getHttpRequestHandler(method.asString, logger)
            val userRepo = ImageUploadRepo(mongoDb.getCollection("imageUploadRepo"))
            return httpRequestHandler.handleRequest(event, userRepo, logger, s3Client)
        }

        return responseGenerator.returnFailureResponse()
    }

}