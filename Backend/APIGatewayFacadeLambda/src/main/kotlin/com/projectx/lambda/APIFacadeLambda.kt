package com.projectx.lambda

import com.amazonaws.services.lambda.runtime.Context
import com.amazonaws.services.lambda.runtime.RequestStreamHandler
import com.google.gson.JsonObject
import com.projectx.lambda.delegator.LambdaInvoker
import com.projectx.utils.impl.AWSLogger
import main.kotlin.com.projectx.utils.APIGatewayRequestDeserializer
import java.io.InputStream
import java.io.OutputStream
import java.io.OutputStreamWriter

class APIFacadeLambda : RequestStreamHandler {

    private lateinit var logger: AWSLogger

    override fun handleRequest(inputStream: InputStream, outputStream: OutputStream, context: Context) {
        logger = AWSLogger.getInstance(context.logger)
        val event = APIGatewayRequestDeserializer.parse(inputStream)
        logger.logInfo(event.toString())

        event?.let {
            val resource = event.getAsJsonPrimitive("resource").asString
            val response = APIGatewayRequestDeserializer.parse(LambdaInvoker
                    .invokeLambda(resource, event.toString(), logger))

            response?.let {
                writeToOutputStream(outputStream,response)
            }
        }
    }

    private fun writeToOutputStream(outputStream: OutputStream, responseJson: JsonObject) {
        val writer = OutputStreamWriter(outputStream, "UTF-8")
        writer.write(responseJson.toString())
        writer.close()
        logger.logInfo("Response : {${responseJson.toString()}}")
    }
}
