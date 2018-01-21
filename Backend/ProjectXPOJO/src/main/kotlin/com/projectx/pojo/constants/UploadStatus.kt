package com.projectx.pojo.constants

enum class UploadStatus {

    PENDING_UPLOAD, // Use this when we want to have a SQS attached to the S3 bucket for notification on any file upload.
    UPLOAD_COMPLETED,
    SUCCESS,
    FAILURE,
    VALIDATION_PENDING,
    VALIDATION_FAILURE
}