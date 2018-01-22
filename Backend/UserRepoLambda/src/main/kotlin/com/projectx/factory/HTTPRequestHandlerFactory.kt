package com.projectx.factory

import com.projectx.handler.HTTPRequestHandler
import com.projectx.handler.Impl.GETHTTPRequestHandler
import com.projectx.handler.Impl.POSTHTTPRequestHandler
import com.projectx.handler.Impl.PUTHTTPRequestHandler
import com.projectx.utils.impl.AWSLogger

class HTTPRequestHandlerFactory {

    fun getHttpRequestHandler(methodName : String, logger : AWSLogger) : HTTPRequestHandler {

        logger.logInfo("Input Method : $methodName")

        if (methodName == "GET") {
            logger.logInfo("Returning GET Method Handler")
            return GETHTTPRequestHandler()
        } else if (methodName == "POST") {
            logger.logInfo("Returning POST Method Handler")
            return POSTHTTPRequestHandler()
        } else if (methodName == "PUT") {
            logger.logInfo("Returning PUT Method Handler")
            return PUTHTTPRequestHandler()
        }

        logger.logError("Invalid Method Name")
        throw Exception()
    }
}