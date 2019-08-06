package com.chrynan.sitetheme.page

import com.chrynan.sitetheme.binder.NotFoundBinder
import com.chrynan.sitetheme.presenter.HeaderFooterPresenter
import com.chrynan.sitetheme.repository.source.FooterItemRepositorySource
import com.chrynan.sitetheme.repository.source.MainNavigationItemRepositorySource
import com.chrynan.sitetheme.view.NotFoundView
import kotlinx.html.*

class NotFoundPage : HeaderFooterPage(),
    NotFoundView,
    NotFoundBinder {

    override val presenter = HeaderFooterPresenter(
        view = this,
        binder = this,
        mainNavigationItemRepository = MainNavigationItemRepositorySource(),
        footerItemRepository = FooterItemRepositorySource()
    )

    override fun <T> TagConsumer<T>.onCreateLayout() = section {
        id = "primary"
        classes = setOf("content-area")

        div { id = headerContainerId }

        main {
            id = "main"
            classes = setOf("site-main")

            header {
                classes = setOf("page-header")

                h1 {
                    classes = setOf("page-title")
                    +"404 - Page Not Found"
                }
            }
        }

        div { id = footerContainerId }
    }

    override fun onLayoutCreated() {
        super.onLayoutCreated()

        presenter.loadHeader()
        presenter.loadFooter()
    }
}