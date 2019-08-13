package com.chrynan.sitetheme.navigator

import com.chrynan.sitetheme.page.Page

interface Navigator {

    fun goTo(page: Page)

    fun goBack()
}