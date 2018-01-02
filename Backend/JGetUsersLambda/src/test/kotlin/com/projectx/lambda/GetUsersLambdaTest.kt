package com.projectx.lambda

import com.amazonaws.services.lambda.runtime.Context
import com.amazonaws.services.lambda.runtime.LambdaLogger
import org.junit.Before
import org.junit.Test
import org.mockito.*
import org.mockito.Mockito.*
import java.io.ByteArrayInputStream
import java.io.ByteArrayOutputStream
import java.io.InputStream

class GetUsersLambdaTest {

    @InjectMocks
    lateinit var getUsersLambda: GetUsersLambda

    @Mock
    lateinit var mockContext: Context

    @Mock
    lateinit var mockLogger : LambdaLogger

    val dummyString = ""
    val inputStream = ByteArrayInputStream(dummyString.toByteArray())
    val outputStream = ByteArrayOutputStream(200)

    @Before
    fun setup() {
        MockitoAnnotations.initMocks(this)
        `when`(mockContext.logger).thenReturn(mockLogger)
        doNothing().`when`(mockLogger).log(Matchers.anyString())
    }

    @Test(expected = IllegalStateException::class)
    fun testGetUsersLambdaWithEmptyInputStream() {
        getUsersLambda.handleRequest(inputStream, outputStream, mockContext)
    }

    //@Test
    fun testGetUsersLambdaWithValidInputStreamHappyCase() {
        val inputStream = getValidInputStream()
        getUsersLambda.handleRequest(inputStream, outputStream, mockContext)
    }

    private fun getValidInputStream() : InputStream {

        val jsonString = "{ \"resource\": \"/users/{userid}\", \"path\": \"/users/siddsahani\", \"httpMethod\": \"GET\", \"pathParameters\": { \"userid\": siddsahani }, \"requestContext\": { \"path\": \"/users/{userid}\", \"accountId\": \"978771551018\", \"resourceId\": \"9bdu23\", \"stage\": \"test-invoke-stage\", \"requestId\": \"test-invoke-request\", \"identity\": { \"apiKey\": \"test-invoke-api-key\", \"userArn\": \"arn:aws:iam::978771551018:root\", \"apiKeyId\": \"test-invoke-api-key-id\", \"userAgent\": \"Apache-HttpClient/4.5.x (Java/1.8.0_144)\", \"accountId\": \"978771551018\", \"caller\": \"978771551018\", \"sourceIp\": \"test-invoke-source-ip\", \"accessKey\": \"ASIAIA7JKQURNDI32CIA\", \"user\": \"978771551018\" }, \"resourcePath\": \"/users/{userid}\", \"httpMethod\": \"GET\", \"apiId\": \"d36whwoe2a\" }, \"isBase64Encoded\": false }"
        return ByteArrayInputStream(jsonString.toByteArray())
    }

    private fun getInValidInputStream() : InputStream {

        val jsonString = "{ \"resource\": \"/users/{userid}\", \"path\": \"/users/adfasdf\", \"httpMethod\": \"GET\", \"pathParameters\": { \"userid\": \"adsfdasf\" }, \"requestContext\": { \"path\": \"/users/{userid}\", \"accountId\": \"978771551018\", \"resourceId\": \"9bdu23\", \"stage\": \"test-invoke-stage\", \"requestId\": \"test-invoke-request\", \"identity\": { \"apiKey\": \"test-invoke-api-key\", \"userArn\": \"arn:aws:iam::978771551018:root\", \"apiKeyId\": \"test-invoke-api-key-id\", \"userAgent\": \"Apache-HttpClient/4.5.x (Java/1.8.0_144)\", \"accountId\": \"978771551018\", \"caller\": \"978771551018\", \"sourceIp\": \"test-invoke-source-ip\", \"accessKey\": \"ASIAIA7JKQURNDI32CIA\", \"user\": \"978771551018\" }, \"resourcePath\": \"/users/{userid}\", \"httpMethod\": \"GET\", \"apiId\": \"d36whwoe2a\" }, \"isBase64Encoded\": false }"
        return ByteArrayInputStream(jsonString.toByteArray())
    }
}