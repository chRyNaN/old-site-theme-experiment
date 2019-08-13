package com.chrynan.sitetheme.di.module

import com.chrynan.locator.Module
import io.ktor.client.HttpClient

interface WebModule : Module {

    val httpClient: HttpClient
}