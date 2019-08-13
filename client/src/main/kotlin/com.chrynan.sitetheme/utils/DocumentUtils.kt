package com.chrynan.sitetheme.utils

import com.chrynan.sitetheme.page.Page
import kotlinx.html.dom.create
import org.w3c.dom.Node
import kotlin.browser.document

fun Node.appendPage(page: Page) {
    page.apply {
        val node = document.create.run {
            onCreateLayout()
        }

        appendChild(node)
    }
}