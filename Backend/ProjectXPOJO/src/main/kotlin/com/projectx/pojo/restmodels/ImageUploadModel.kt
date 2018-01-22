package com.projectx.pojo.restmodels

import com.projectx.pojo.constants.UploadStatus

data class ImageUploadModel(

    val userId: String,
    val uploadStatus: UploadStatus,
    val s3PUTSingedURL: String,
    val s3GETSignedURL: String,
    val key: String,
    val id: String? = null
)