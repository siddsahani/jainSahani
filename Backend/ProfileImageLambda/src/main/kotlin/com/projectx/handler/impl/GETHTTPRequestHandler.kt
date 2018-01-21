package com.projectx.handler.impl

import com.amazonaws.services.s3.AmazonS3
import com.google.gson.JsonObject
import com.projectx.handler.HTTPRequestHandler
import com.projectx.repository.ImageUploadRepo
import com.projectx.utils.impl.AWSLogger

class GETHTTPRequestHandler : HTTPRequestHandler {
    override fun handleRequest(input: JsonObject, imageUploadRepo: ImageUploadRepo, logger: AWSLogger, s3Client: AmazonS3): String {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }
}