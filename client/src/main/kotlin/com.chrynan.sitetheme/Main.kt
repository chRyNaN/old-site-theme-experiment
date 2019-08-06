package com.chrynan.sitetheme

import com.chrynan.sitetheme.page.HomePage
import com.chrynan.sitetheme.page.Page
import kotlinx.html.dom.create
import org.w3c.dom.Node
import kotlin.browser.document
import kotlin.browser.window

fun main() {
    window.onload = {
        val page = HomePage()

        document.body?.appendPage(page)

        page.onLayoutCreated()
    }
}

fun Node.appendPage(page: Page) {
    page.apply {
        val node = document.create.run {
            onCreateLayout()
        }

        appendChild(node)
    }
}