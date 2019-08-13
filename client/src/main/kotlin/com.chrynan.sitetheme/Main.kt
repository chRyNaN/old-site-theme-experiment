package com.chrynan.sitetheme

import kotlin.browser.window

fun main() {
    val application = SiteApplication()

    window.onload = {
        application.onStart()
    }
}