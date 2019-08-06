package com.chrynan.sitetheme.templates

import com.chrynan.sitetheme.viewmodel.TopNavbarViewModel
import kotlinx.html.*

class TopNavbarTemplate : Template<TopNavbarViewModel> {

    override fun <T> TagConsumer<T>.layout(viewModel: TopNavbarViewModel) =
        header {
            classes = setOf("mdl-layout__header", "site-header")

            div(classes = "mdl-layout__header-row") {

                span(classes = "mdl-layout-title") {

                    a {
                        classes = setOf("site-title", "top-navbar-title")
                        href = viewModel.siteTitleLink

                        +viewModel.siteTitle
                    }
                }

                div(classes = "mdl-layout-spacer")

                nav {
                    classes =
                        setOf("mdl-navigation", "navbar", "site-navbar", "top-navbar")

                    for (item in viewModel.navigationMenu.items) {
                        a {
                            classes =
                                setOf("mdl-navigation__link", "navbar-link", "site-navbar-link", "top-navbar-link")
                            href = item.link

                            +item.name
                        }
                    }
                }
            }
        }
}