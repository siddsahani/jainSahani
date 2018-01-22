package com.projectx.lambda.delegator

import com.amazonaws.services.lambda.AWSLambdaClientBuilder
import com.amazonaws.services.lambda.invoke.LambdaInvokerFactory
import com.projectx.lambda.dependencies.UserRepoLambda
import com.projectx.utils.impl.AWSLogger

object LambdaInvoker {

    fun invokeLambda(apiPath : String, input : String, logger : AWSLogger) : String {

        if (apiPath.contains("/users")) {
            logger.logInfo("Invoking UserRepo Lambda")
            val userLambda = LambdaInvokerFactory.builder()
                    .lambdaClient(AWSLambdaClientBuilder.defaultClient())
                    .build(UserRepoLambda::class.java)
            return userLambda.invokeLambda(input)
        }
        logger.logError("Invalid api Path. Doing Nothing")
        return ""
    }
}