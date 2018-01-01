package com.projectx.pojo.restmodels

data class UserInfoModel(
    val userId: String,
    val firstName: String?,
    val lastName: String?,
    val profileImageUrl: String?,
    val id: String? = null
)