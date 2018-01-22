package com.projectx.handler.Impl

import com.google.gson.Gson
import com.google.gson.JsonObject
import com.projectx.handler.HTTPRequestHandler
import com.projectx.pojo.restmodels.UserInfoModel
import com.projectx.repository.UserRepository
import com.projectx.utils.ResponseGenerator
import com.projectx.utils.impl.AWSLogger
import main.kotlin.com.projectx.utils.APIGatewayRequestDeserializer

class PUTHTTPRequestHandler : HTTPRequestHandler {

    private var responseGenerator : ResponseGenerator

    init {
        responseGenerator = ResponseGenerator
    }

    override fun handleRequest(input: JsonObject, userRepository: UserRepository, logger: AWSLogger): String {

        val event = input.getAsJsonPrimitive("body")
        val userJson = APIGatewayRequestDeserializer.parse(event.asString)

        val pathParameter = input.getAsJsonObject("pathParameters")
        val userId = pathParameter.getAsJsonPrimitive("userid")?.asString

        userId?.let {
            var userInfo : UserInfoModel

            userJson?.let {

                val gson = Gson()
                userInfo = gson.fromJson(userJson, UserInfoModel::class.java)
                userInfo?.let {
                    logger.logInfo("$userJson")

                    if (null == userRepository.findByUserId(userId)) {
                        return responseGenerator.returnFailureResponse("User with userId ${userInfo.userId}, does not Exists")
                    }

                    userRepository.updateUser(userInfo)

                    return responseGenerator.returnSuccessResponse(userInfo)
                }
            }
        }

        return responseGenerator.returnFailureResponse()
    }
}