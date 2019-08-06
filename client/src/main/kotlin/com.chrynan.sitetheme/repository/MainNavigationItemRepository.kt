package com.chrynan.sitetheme.repository

import com.chrynan.sitetheme.viewmodel.TopNavbarViewModel

interface MainNavigationItemRepository {

    suspend fun getNavigationItem(): TopNavbarViewModel
}