package com.projectx.repository

import com.mongodb.client.MongoCollection
import com.projectx.pojo.restmodels.ImageUploadModel
import com.projectx.pojo.restmodels.UserInfoModel
import org.bson.Document
import org.bson.types.ObjectId

class ImageUploadRepo(private val images: MongoCollection<Document>) {

    fun addNewUploadRequest(imageUploadInfo: ImageUploadModel): ImageUploadModel {

        val doc = Document()
        doc.append("userId", imageUploadInfo.userId)
        doc.append("uploadStatus", imageUploadInfo.uploadStatus.toString())
        doc.append("s3PUTSingedURL", imageUploadInfo.s3PUTSingedURL)
        doc.append("s3GETSignedURL", imageUploadInfo.s3GETSignedURL)
        doc.append("key", imageUploadInfo.key)
        images.insertOne(doc)

        val objectId : ObjectId = doc.getObjectId("_id")

        return ImageUploadModel(
                imageUploadInfo.userId,
                imageUploadInfo.uploadStatus,
                imageUploadInfo.s3PUTSingedURL,
                imageUploadInfo.s3GETSignedURL,
                imageUploadInfo.key,
                objectId.toString())
    }
}