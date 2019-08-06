package com.chrynan.sitetheme.page

import com.chrynan.sitetheme.binder.HeaderFooterBinder
import com.chrynan.sitetheme.presenter.HeaderFooterPresenter
import com.chrynan.sitetheme.templates.FooterTemplate
import com.chrynan.sitetheme.templates.TopNavbarTemplate
import com.chrynan.sitetheme.view.HeaderFooterView
import com.chrynan.sitetheme.viewmodel.FooterViewModel
import com.chrynan.sitetheme.viewmodel.TopNavbarViewModel
import kotlinx.html.dom.append
import kotlin.browser.document

abstract class HeaderFooterPage : Page(),
    HeaderFooterView,
    HeaderFooterBinder {

    protected abstract val presenter: HeaderFooterPresenter

    protected open val headerContainerId = "headerContainer"
    protected open val footerContainerId = "footerContainer"

    private val headerContainer by lazy { document.getElementById(headerContainerId) }
    private val footerContainer by lazy { document.getElementById(footerContainerId) }

    private val headerTemplate by lazy { TopNavbarTemplate() }
    private val footerTemplate by lazy { FooterTemplate() }

    override fun bindHeader(model: TopNavbarViewModel) {
        headerContainer?.append {
            headerTemplate.apply {
                layout(model)
            }
        }
    }

    override fun bindFooter(model: FooterViewModel) {
        footerContainer?.append {
            footerTemplate.apply {
                layout(model)
            }
        }
    }
}