package com.chrynan.sitetheme.presenter

import com.chrynan.sitetheme.binder.HeaderFooterBinder
import com.chrynan.sitetheme.repository.FooterItemRepository
import com.chrynan.sitetheme.repository.MainNavigationItemRepository
import com.chrynan.sitetheme.view.HeaderFooterView
import kotlinx.coroutines.launch

open class HeaderFooterPresenter(
    private val view: HeaderFooterView,
    private val binder: HeaderFooterBinder,
    private val mainNavigationItemRepository: MainNavigationItemRepository,
    private val footerItemRepository: FooterItemRepository
) : Presenter {

    fun loadHeader() {
        launch {
            val headerItem = mainNavigationItemRepository.getNavigationItem()

            binder.bindHeader(headerItem)
        }
    }

    fun loadFooter() {
        launch {
            val footerItem = footerItemRepository.getFooterItem()

            binder.bindFooter(footerItem)
        }
    }
}