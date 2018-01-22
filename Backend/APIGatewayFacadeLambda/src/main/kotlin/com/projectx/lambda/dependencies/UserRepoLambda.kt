package com.projectx.lambda.dependencies

import com.amazonaws.services.lambda.invoke.LambdaFunction

interface UserRepoLambda {

    @LambdaFunction(functionName = "UserRepoLambda")
    fun invokeLambda(input: String) : String
}