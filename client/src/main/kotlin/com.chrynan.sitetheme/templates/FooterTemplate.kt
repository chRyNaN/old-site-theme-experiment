package com.chrynan.sitetheme.templates

import com.chrynan.sitetheme.viewmodel.FooterViewModel
import kotlinx.html.*

class FooterTemplate : Template<FooterViewModel> {

    override fun <T> TagConsumer<T>.layout(viewModel: FooterViewModel) = footer {
        classes = setOf("footer", "bottom-navbar", "bottom-navigation", "mdl-mega-footer")

        div {
            classes = setOf("mdl-mega-footer__middle-section")

            for (menu in viewModel.navigationMenus) {
                div {
                    classes = setOf("mdl-mega-footer__drop-down-section")

                    input {
                        classes = setOf("mdl-mega-footer__heading-checkbox")
                        type = InputType.checkBox
                        checked = true
                    }

                    h1 {
                        classes = setOf("mdl-mega-footer__heading")

                        +menu.name
                    }

                    ul {
                        classes = setOf("mdl-mega-footer__link-list")

                        for (item in menu.items) {
                            li {
                                a {
                                    href = item.link
                                    +item.name
                                }
                            }
                        }
                    }
                }
            }
        }

        div {
            classes = setOf("mdl-mega-footer__bottom-section")

            div {
                classes = setOf("mdl-logo")

                a {
                    href = viewModel.siteTitleLink
                    +viewModel.siteTitle
                }
            }

            if (viewModel.copyrightTitle != null) {
                ul {
                    classes = setOf("mdl-mega-footer__link-list")

                    li {
                        a {
                            if (viewModel.copyrightTitleLink != null) {
                                href = viewModel.copyrightTitleLink
                            }

                            +viewModel.copyrightTitle
                        }
                    }
                }
            }
        }
    }
}