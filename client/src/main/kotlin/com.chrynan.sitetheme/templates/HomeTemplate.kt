package com.chrynan.sitetheme.templates

import com.chrynan.sitetheme.viewmodel.HomeViewModel
import kotlinx.html.TagConsumer
import kotlinx.html.classes
import kotlinx.html.div
import kotlinx.html.main

class HomeTemplate : Template<HomeViewModel> {

    override fun <T> TagConsumer<T>.layout(viewModel: HomeViewModel) = div {
        classes = setOf("mdl-layout", "mdl-js-layout")

        // TODO Header

        main {
            classes = setOf("mdl-layout__content", "mdl-grid")

            // TODO Cards
        }

        // TODO Footer
    }
}