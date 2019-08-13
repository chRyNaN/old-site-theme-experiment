package com.chrynan.sitetheme.navigator

import com.chrynan.sitetheme.page.Page
import com.chrynan.sitetheme.utils.appendPage
import org.w3c.dom.Element
import kotlin.browser.document
import kotlin.dom.clear

class NavigatorSource(private val containerId: String = "container-id") : Navigator {

    private val containerElement: Element?
        get() = document.body // TODO document.getElementById(containerId)

    private val stack = mutableListOf<Page>()

    private var currentPage: Page? = null

    override fun goTo(page: Page) {
        // Remove the old layout
        currentPage?.onDestroyLayout()
        containerElement?.clear()
        currentPage?.onLayoutDestroyed()
        currentPage?.let { stack.add(it) }

        // Add the new layout
        currentPage = page
        containerElement?.appendPage(page)
        page.onLayoutCreated()
    }

    override fun goBack() {
        // Remove the old layout
        currentPage?.onDestroyLayout()
        containerElement?.clear()
        currentPage?.onLayoutDestroyed()

        // Add the previous layout
        currentPage = if (stack.isNotEmpty()) stack.removeAt(stack.size - 1) else null
        currentPage?.let { containerElement?.appendPage(it) }
        currentPage?.onLayoutCreated()
    }
}