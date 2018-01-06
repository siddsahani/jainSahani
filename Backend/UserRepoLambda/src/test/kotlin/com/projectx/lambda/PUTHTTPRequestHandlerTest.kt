package com.projectx.lambda

import com.google.gson.JsonObject
import com.mongodb.MongoClient
import com.mongodb.MongoClientURI
import com.projectx.handler.Impl.PUTHTTPRequestHandler
import com.projectx.pojo.restmodels.UserInfoModel
import com.projectx.repository.UserRepository
import com.projectx.utils.ResponseGenerator
import com.projectx.utils.impl.AWSLogger
import main.kotlin.com.projectx.utils.APIGatewayRequestDeserializer
import org.bson.Document
import org.junit.Before
import org.junit.Test

class PUTHTTPRequestHandlerTest {

    lateinit var putHttpRequestHandler: PUTHTTPRequestHandler

//    @Mock
//    lateinit var mockResponseGenerator : ResponseGenerator
//
//    @Mock
//    lateinit var mockLogger: AWSLogger

    // TODO : Move this to environment variable.
    private val MONGO_DB_CONNECTION_STRING = "mongodb://jainsahani:JainSahani%401234@projectxcluster-shard-00-00-rdihp.mongodb.net:27017,projectxcluster-shard-00-01-rdihp.mongodb.net:27017,projectxcluster-shard-00-02-rdihp.mongodb.net:27017/test?ssl=true&replicaSet=ProjectXCluster-shard-0&authSource=admin"

    @Before
    fun setup() {
//        MockitoAnnotations.initMocks(this)
//        Mockito.`when`(mockResponseGenerator.returnFailureResponse()).thenReturn("")
//        Mockito.`when`(mockResponseGenerator.returnSuccessResponse(Mockito.any())).thenReturn("")
    }
    //@Test
    fun testHappyCase() {

        val userInfo = UserInfoModel("jainPiyushHello123", "Piyus", "safds", "")

        val userRepo = getUserRepository()

        val newUserInfo = userRepo.findByUserId(userInfo.userId)

        println(newUserInfo?.firstName)

        userRepo.updateUser(userInfo)
    }


    private fun getValidInputString() : JsonObject? {
        val jsonString = "{ \"resource\": \"/users/{userid}\", \"path\": \"/users/jainPiyushHello1235\", \"httpMethod\": \"PUT\", \"headers\": null, \"queryStringParameters\": null, \"pathParameters\": { \"userid\": \"jainPiyushHello1235\" }, \"stageVariables\": null, \"requestContext\": { \"path\": \"/users/{userid}\", \"accountId\": \"978771551018\", \"resourceId\": \"9bdu23\", \"stage\": \"test-invoke-stage\", \"requestId\": \"test-invoke-request\", \"identity\": { \"cognitoIdentityPoolId\": null, \"cognitoIdentityId\": null, \"apiKey\": \"test-invoke-api-key\", \"cognitoAuthenticationType\": null, \"userArn\": \"arn:aws:iam::978771551018:root\", \"apiKeyId\": \"test-invoke-api-key-id\", \"userAgent\": \"Apache-HttpClient/4.5.x (Java/1.8.0_144)\", \"accountId\": \"978771551018\", \"caller\": \"978771551018\", \"sourceIp\": \"test-invoke-source-ip\", \"accessKey\": \"ASIAJ7KY2QAKDSWI3DGQ\", \"cognitoAuthenticationProvider\": null, \"user\": \"978771551018\" }, \"resourcePath\": \"/users/{userid}\", \"httpMethod\": \"PUT\", \"apiId\": \"d36whwoe2a\" }, \"body\": \"{\\n    \\\"userId\\\" : \\\"jainPiyushHello1235\\\",\\n    \\\"firstName\\\" : \\\"Hello\\\"\\n}\", \"isBase64Encoded\": false }"
        return APIGatewayRequestDeserializer.parse(jsonString)
    }

    private fun getUserRepository() : UserRepository {

        val uri = MongoClientURI(MONGO_DB_CONNECTION_STRING)
        val mongoDb = MongoClient(uri).getDatabase("projectX")
        return UserRepository(mongoDb.getCollection("userRepo"))
    }



}