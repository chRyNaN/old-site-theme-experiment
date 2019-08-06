package com.chrynan.sitetheme.repository

import com.chrynan.sitetheme.viewmodel.FooterViewModel

interface FooterItemRepository {

    suspend fun getFooterItem(): FooterViewModel
}