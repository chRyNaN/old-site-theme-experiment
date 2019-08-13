package com.chrynan.sitetheme.di.module.source

import com.chrynan.sitetheme.di.module.WebModule
import io.ktor.client.HttpClient
import io.ktor.client.engine.js.Js
import io.ktor.client.features.json.JsonFeature
import io.ktor.client.features.logging.DEFAULT
import io.ktor.client.features.logging.LogLevel
import io.ktor.client.features.logging.Logger
import io.ktor.client.features.logging.Logging

class WebModuleSource : WebModule {

    override val httpClient by lazy {
        HttpClient(Js) {
            install(JsonFeature)
            install(Logging) {
                logger = Logger.DEFAULT
                level = LogLevel.ALL
            }
        }
    }
}