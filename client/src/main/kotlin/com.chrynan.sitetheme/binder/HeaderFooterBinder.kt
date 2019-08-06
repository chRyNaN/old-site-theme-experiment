package com.chrynan.sitetheme.binder

import com.chrynan.sitetheme.viewmodel.FooterViewModel
import com.chrynan.sitetheme.viewmodel.TopNavbarViewModel

interface HeaderFooterBinder {

    fun bindHeader(model: TopNavbarViewModel)

    fun bindFooter(model: FooterViewModel)
}