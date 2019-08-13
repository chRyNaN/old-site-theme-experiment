package com.chrynan.sitetheme

import com.chrynan.sitetheme.page.HomePage
import kotlin.browser.window

fun main() {
    val application = SiteApplication(startingPage = HomePage())

    window.onload = {
        application.onStart()
    }
}