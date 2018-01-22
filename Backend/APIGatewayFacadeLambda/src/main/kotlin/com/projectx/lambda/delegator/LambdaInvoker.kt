package com.projectx.lambda.delegator

import com.amazonaws.services.lambda.AWSLambdaClientBuilder
import com.amazonaws.services.lambda.invoke.LambdaInvokerFactory
import com.projectx.lambda.dependencies.ProfileImageLambda
import com.projectx.lambda.dependencies.UserRepoLambda
import com.projectx.utils.impl.AWSLogger

object LambdaInvoker {

    fun invokeLambda(apiPath : String, input : String, logger : AWSLogger) : String {

        logger.logInfo("API Path : $apiPath")

        if (Regex("/users/(.*)/profileimage").matches(apiPath)) {
            logger.logInfo("Invoking Profile Image Lambda")

            val lambda = LambdaInvokerFactory.builder()
                    .lambdaClient(AWSLambdaClientBuilder.defaultClient())
                    .build(ProfileImageLambda::class.java)
            return lambda.invokeLambda(input)
        } else if (Regex("/users(.*)").matches(apiPath)) {

            logger.logInfo("Invoking UserRepo Lambdas")
            val lambda = LambdaInvokerFactory.builder()
                    .lambdaClient(AWSLambdaClientBuilder.defaultClient())
                    .build(UserRepoLambda::class.java)
            return lambda.invokeLambda(input)
        }

        logger.logError("Invalid api Path. Doing Nothing")
        return ""
    }
}