package com.projectx.repository

import com.mongodb.client.MongoCollection
import com.mongodb.client.model.Filters
import com.projectx.pojo.restmodels.UserInfoModel
import org.bson.Document
import org.bson.types.ObjectId
import java.util.ArrayList

class UserRepository(private val users: MongoCollection<Document>) {

    val allUsers: List<UserInfoModel>
        get() {
            val allUser = ArrayList<UserInfoModel>()
            for (doc in users.find()) {
                allUser.add(user(doc))
            }
            return allUser
        }

    fun findByUserId(userId: String): UserInfoModel? {
        val doc = users.find(Filters.eq("userId", userId)).first()
        if (null != doc) {
            return user(doc)
        }
        return null
    }

    private fun user(doc: Document): UserInfoModel {
        return UserInfoModel(
                doc.getString("userId"),
                doc.getString("firstName"),
                doc.getString("lastName"),
                doc.getString("profileImageUrl"),
                doc.get("_id").toString())
    }
}