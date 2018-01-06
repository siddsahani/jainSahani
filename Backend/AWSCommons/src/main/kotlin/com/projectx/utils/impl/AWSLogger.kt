package com.projectx.utils.impl

import com.amazonaws.services.lambda.runtime.LambdaLogger
import com.projectx.pojo.buildingblocks.SingletonHolder
import com.projectx.utils.Logger

class AWSLogger private constructor(awsLogger: LambdaLogger): Logger<String> {

    private var logger: LambdaLogger = awsLogger

    companion object : SingletonHolder<AWSLogger, LambdaLogger>(::AWSLogger)

    override fun logInfo(infoMessage: String) {
        logger.log("[INFO] : $infoMessage")
    }

    override fun logError(errorMessage: String) {
        logger.log("[ERROR] : $errorMessage")
    }

    override fun logWarning(warnMessage: String) {
        logger.log("[ERROR] : $warnMessage")
    }
}