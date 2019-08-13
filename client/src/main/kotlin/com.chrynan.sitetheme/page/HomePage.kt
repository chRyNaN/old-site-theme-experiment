package com.chrynan.sitetheme.page

import com.chrynan.locator.LocatesWith
import com.chrynan.locator.attachToDependencyGraph
import com.chrynan.locator.detachFromDependencyGraph
import com.chrynan.locator.locate
import com.chrynan.sitetheme.binder.HomeBinder
import com.chrynan.sitetheme.di.module.HomePageModule
import com.chrynan.sitetheme.di.module.source.HomePageModuleSource
import com.chrynan.sitetheme.templates.PostItemTemplate
import com.chrynan.sitetheme.view.HomeView
import com.chrynan.sitetheme.viewmodel.PostItemViewModel
import kotlinx.html.*
import kotlinx.html.dom.append
import kotlin.browser.document

@JsName("HomePage")
class HomePage : HeaderFooterPage(),
    HomeView,
    HomeBinder,
    LocatesWith<HomePageModule> {

    override val module by lazy { HomePageModuleSource(this) }

    override val presenter by locate { presenter }

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

        attachToDependencyGraph()

        presenter.loadHeader()
        presenter.loadFooter()
        presenter.loadPosts()
    }

    override fun onLayoutDestroyed() {
        super.onLayoutDestroyed()

        detachFromDependencyGraph()
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