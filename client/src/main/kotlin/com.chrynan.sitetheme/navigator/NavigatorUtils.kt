package com.chrynan.sitetheme.navigator

import com.chrynan.sitetheme.SiteApplication
import com.chrynan.sitetheme.page.Page
import kotlin.browser.window

fun startAppOn(pageRetriever: () -> Page) {
    val application = SiteApplication(pageRetriever)

    window.onload = {
        application.onStart()
    }
}