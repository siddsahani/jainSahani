package com.projectx.utils

interface Logger<T> {

    fun logInfo(infoMessage: T)
    fun logError(errorMessage: T)
    fun logWarning(warnMessage: T)
}