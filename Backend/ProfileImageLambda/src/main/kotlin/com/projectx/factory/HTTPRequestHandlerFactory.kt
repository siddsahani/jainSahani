package com.projectx.factory

import com.projectx.handler.HTTPRequestHandler
import com.projectx.handler.impl.GETHTTPRequestHandler
import com.projectx.handler.impl.POSTHTTPRequestHandler
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
        }

        logger.logError("Invalid Method Name")
        throw Exception()
    }
}