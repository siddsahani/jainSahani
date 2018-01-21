package com.projectx.lambda.dependencies

import com.amazonaws.services.lambda.invoke.LambdaFunction

interface ProfileImageLambda {

    @LambdaFunction(functionName = "ProfileImageLambda")
    fun invokeLambda(input: String) : String
}