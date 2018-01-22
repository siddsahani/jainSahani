package com.projectx.utils

import com.google.gson.Gson
import com.google.gson.JsonObject

object ResponseGenerator {

    fun returnFailureResponse(message: String = "Some Unknown Error Occured") : String {

        val responseJson = JsonObject()

        val responseBody = JsonObject()
        responseBody.addProperty("output", message)
        responseBody.addProperty("message", "Failure")
        responseJson.addProperty("statusCode", 400)
        responseJson.add("body", responseBody)

        addResponseHeader(responseJson)

        return responseJson.toString()
    }

    fun returnSuccessResponse(model: Any) : String {

        val responseJson = JsonObject()
        val output = Gson().toJsonTree(model)

        val responseBody = JsonObject()
        responseBody.add("output", output)
        responseBody.addProperty("message", "Success")
        responseJson.addProperty("statusCode", 200)
        responseJson.addProperty("body", responseBody.toString())

        addResponseHeader(responseJson)

        return responseJson.toString()
    }

    private fun addResponseHeader(responseJson: JsonObject) {
        val headerJson = JsonObject()
        headerJson.addProperty("x-custom-response-header", "my custom response header value")
        headerJson.addProperty("Access-Control-Allow-Origin", "*")
        responseJson.add("headers", headerJson)
    }
}