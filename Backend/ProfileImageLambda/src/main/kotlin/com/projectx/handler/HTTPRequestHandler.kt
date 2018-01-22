package com.projectx.handler

import com.amazonaws.services.s3.AmazonS3
import com.google.gson.JsonObject
import com.projectx.repository.ImageUploadRepo
import com.projectx.utils.impl.AWSLogger

interface HTTPRequestHandler {

    fun handleRequest(input : JsonObject, imageUploadRepo: ImageUploadRepo, logger : AWSLogger, s3Client: AmazonS3) : String
}