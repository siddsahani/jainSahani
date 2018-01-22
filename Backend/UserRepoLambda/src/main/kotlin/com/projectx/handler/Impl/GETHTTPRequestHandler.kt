package com.projectx.handler.Impl

import com.google.gson.JsonObject
import com.projectx.handler.HTTPRequestHandler
import com.projectx.repository.UserRepository
import com.projectx.utils.ResponseGenerator
import com.projectx.utils.impl.AWSLogger

class GETHTTPRequestHandler : HTTPRequestHandler {

    private var responseGenerator : ResponseGenerator

    init {
        responseGenerator = ResponseGenerator
    }

    override fun handleRequest(input: JsonObject, userRepository: UserRepository, logger: AWSLogger): String {

        val event = input.getAsJsonObject("pathParameters")
        val userId = event.getAsJsonPrimitive("userid")?.asString

        if (userId != null) {
            logger.logInfo("Fetching User Details for UserId : {$userId}")
            val userInfo = userRepository.findByUserId(userId)

            userInfo?.let {
                logger.logInfo("User Details Retrieved Successfully for UserId : {$userId}")
                return responseGenerator.returnSuccessResponse(userInfo)
            }
        }

        logger.logError("Retrieving User Details Failed for UserId : {$userId}")
        return responseGenerator.returnFailureResponse()
    }

}