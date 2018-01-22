package main.kotlin.com.projectx.utils

import com.google.gson.JsonObject
import com.google.gson.JsonParser
import com.projectx.utils.impl.AWSLogger
import java.io.BufferedReader
import java.io.InputStream
import java.io.InputStreamReader

object APIGatewayRequestDeserializer {
    private var parser: JsonParser = JsonParser()

    init {
        parser = JsonParser()
    }

    fun parse(inputStream: InputStream) : JsonObject? {

        return try {
            val reader = BufferedReader(InputStreamReader(inputStream))
            parser.parse(reader).asJsonObject
        } catch (ex : IllegalStateException) {
            throw ex
        } catch (ex : Exception) {
            throw ex
        }
    }

    fun parse(inputString : String) : JsonObject? {
        return try {
            parser.parse(inputString).asJsonObject
        } catch (ex : IllegalStateException) {
            throw ex
        } catch (ex : Exception) {
            throw ex
        }
    }
}