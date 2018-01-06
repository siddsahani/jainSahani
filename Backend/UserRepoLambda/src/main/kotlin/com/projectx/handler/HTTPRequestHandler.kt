package com.projectx.handler

import com.google.gson.JsonObject
import com.projectx.repository.UserRepository
import com.projectx.utils.impl.AWSLogger

interface HTTPRequestHandler {

    fun handleRequest(input : JsonObject, userRepository: UserRepository, logger : AWSLogger) : String
}