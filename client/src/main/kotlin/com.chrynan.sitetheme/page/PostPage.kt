package com.chrynan.sitetheme.page

import kotlinx.html.*

class PostPage : Page() {

    override fun <T> TagConsumer<T>.onCreateLayout() = div {
        classes = setOf("mdl-layout", "post-container")

        div { id = "headerContainerId" }

        main {
            classes = setOf("mdl_layout__content", "post-content")


        }

        div { id = "footerContainerId" }
    }

    override fun onLayoutCreated() {
        super.onLayoutCreated()
    }
}