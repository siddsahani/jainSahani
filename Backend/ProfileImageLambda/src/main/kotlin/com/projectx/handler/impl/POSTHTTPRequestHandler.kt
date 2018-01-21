package com.projectx.handler.impl

import com.amazonaws.HttpMethod
import com.amazonaws.services.s3.AmazonS3
import com.amazonaws.services.s3.model.GeneratePresignedUrlRequest
import com.google.gson.Gson
import com.google.gson.JsonObject
import com.projectx.handler.HTTPRequestHandler
import com.projectx.pojo.constants.UploadStatus
import com.projectx.pojo.restmodels.ImageUploadModel
import com.projectx.pojo.restmodels.UserInfoModel
import com.projectx.repository.ImageUploadRepo
import com.projectx.utils.ResponseGenerator
import com.projectx.utils.impl.AWSLogger
import main.kotlin.com.projectx.utils.APIGatewayRequestDeserializer
import java.net.URL
import java.util.*

class POSTHTTPRequestHandler : HTTPRequestHandler {

    private var responseGenerator : ResponseGenerator

    init {
        responseGenerator = ResponseGenerator
    }

    override fun handleRequest(input: JsonObject, imageUploadRepo: ImageUploadRepo, logger: AWSLogger, s3Client: AmazonS3): String {

        val pathParameter = input.getAsJsonObject("pathParameters")
        val userId = pathParameter.getAsJsonPrimitive("userid")?.asString

        userId?.let {

            // TODO: Take this from environment variable.
            val bucketName = "user-profile-image-bucket-jainsahani/"
            val key = UUID.randomUUID().toString()

            key?.let {
                val generatePresignedUrlRequest = GeneratePresignedUrlRequest(bucketName, key)
                generatePresignedUrlRequest.method = HttpMethod.PUT
                val s3PUTUrl = s3Client.generatePresignedUrl(generatePresignedUrlRequest)

                val imageUploadInfo = ImageUploadModel(userId, UploadStatus.PENDING_UPLOAD,
                        s3PUTUrl.toString(), "", key)

                imageUploadRepo.addNewUploadRequest(imageUploadInfo)

                return responseGenerator.returnSuccessResponse(imageUploadInfo)
            }
        }

        return responseGenerator.returnFailureResponse()
    }
}