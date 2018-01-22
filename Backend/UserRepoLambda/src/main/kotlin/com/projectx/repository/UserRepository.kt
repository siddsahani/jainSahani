package com.projectx.repository

import com.mongodb.client.MongoCollection
import com.mongodb.client.model.Filters
import com.projectx.pojo.restmodels.UserInfoModel
import org.bson.Document
import org.bson.types.ObjectId
import java.util.ArrayList
import com.mongodb.BasicDBObject

import com.mongodb.client.model.Filters.eq

class UserRepository(private val users: MongoCollection<Document>) {

    val allUsers: List<UserInfoModel>
        get() {
            val allUser = ArrayList<UserInfoModel>()
            for (doc in users.find()) {
                allUser.add(user(doc))
            }
            return allUser
        }

    fun addNewUser(userInfo: UserInfoModel): UserInfoModel {
        val doc = Document()
        doc.append("userId", userInfo.userId)
        doc.append("firstName", userInfo.firstName)
        doc.append("lastName", userInfo.lastName)
        doc.append("profileImageUrl", userInfo.profileImageUrl)
        users.insertOne(doc)

        val objectId : ObjectId = doc.getObjectId("_id")

        return UserInfoModel(
                userInfo.userId,
                userInfo.firstName,
                userInfo.lastName,
                userInfo.profileImageUrl,
                objectId.toString())
    }

    fun findByUserId(userId: String): UserInfoModel? {
        val doc = users.find(eq("userId", userId)).first()
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

    fun updateUser(userInfo: UserInfoModel): UserInfoModel {

        val doc = Document()
        doc.append("userId", userInfo.userId)
        doc.append("firstName", userInfo.firstName)
        doc.append("lastName", userInfo.lastName)
        doc.append("profileImageUrl", userInfo.profileImageUrl)
        users.replaceOne(Document("userId", userInfo.userId), doc)

        return UserInfoModel(
                userInfo.userId,
                userInfo.firstName,
                userInfo.lastName,
                userInfo.profileImageUrl)
    }
}