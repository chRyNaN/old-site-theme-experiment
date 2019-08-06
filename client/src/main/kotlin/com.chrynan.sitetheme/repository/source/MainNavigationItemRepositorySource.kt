package com.chrynan.sitetheme.repository.source

import com.chrynan.sitetheme.repository.MainNavigationItemRepository
import com.chrynan.sitetheme.viewmodel.NavigationMenuItemViewModel
import com.chrynan.sitetheme.viewmodel.NavigationMenuViewModel
import com.chrynan.sitetheme.viewmodel.TopNavbarViewModel

class MainNavigationItemRepositorySource : MainNavigationItemRepository {

    override suspend fun getNavigationItem() =
        TopNavbarViewModel(
            siteTitle = "chRyNaN Codes",
            siteTitleLink = "chrynan.codes",
            navigationMenu = NavigationMenuViewModel(
                name = "TopNavBar",
                items = listOf(
                    NavigationMenuItemViewModel(
                        name = "Test Link",
                        link = "chrynan.codes"
                    )
                )
            )
        )
}