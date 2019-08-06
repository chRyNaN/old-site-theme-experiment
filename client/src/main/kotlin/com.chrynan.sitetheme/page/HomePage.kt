package com.chrynan.sitetheme.page

import com.chrynan.sitetheme.binder.HomeBinder
import com.chrynan.sitetheme.presenter.HomePresenter
import com.chrynan.sitetheme.repository.source.FooterItemRepositorySource
import com.chrynan.sitetheme.repository.source.MainNavigationItemRepositorySource
import com.chrynan.sitetheme.repository.source.PostRepositorySource
import com.chrynan.sitetheme.templates.PostItemTemplate
import com.chrynan.sitetheme.view.HomeView
import com.chrynan.sitetheme.viewmodel.PostItemViewModel
import kotlinx.html.*
import kotlinx.html.dom.append
import kotlin.browser.document

@JsName("HomePage")
class HomePage : HeaderFooterPage(),
    HomeView,
    HomeBinder {

    override val presenter by lazy {
        HomePresenter(
            this,
            this,
            PostRepositorySource(),
            MainNavigationItemRepositorySource(),
            FooterItemRepositorySource()
        )
    }

    private val postTemplate by lazy { PostItemTemplate() }

    private val postContainer by lazy { document.getElementById("postContainer") }
    private val progressBar by lazy { document.getElementById("progressBar") }

    override fun <T> TagConsumer<T>.onCreateLayout() = div {
        div { id = headerContainerId }

        div {
            classes = setOf("mdl-progress", "mdl-js-progress", "mdl-progress__indeterminate", "progress-bar")

            id = "progressBar"
        }

        div {
            classes = setOf("mdl-grid")

            style = """
                    justify-content: space-evenly;
                """.trimIndent()

            div {
                classes = setOf("mdl-cell", "mdl-cell--1-col")

                id = "postContainer"
            }
        }

        div { id = footerContainerId }
    }

    override fun onLayoutCreated() {
        super.onLayoutCreated()

        presenter.loadHeader()
        presenter.loadFooter()
        presenter.loadPosts()
    }

    override fun showProgressBar() {
        progressBar?.classList?.remove("hide")
    }

    override fun hideProgressBar() {
        progressBar?.classList?.add("hide")
    }

    override fun bindPosts(models: List<PostItemViewModel>) {
        postContainer?.append {
            postTemplate.apply {
                for (model in models) {
                    layout(model)
                }
            }
        }
    }
}