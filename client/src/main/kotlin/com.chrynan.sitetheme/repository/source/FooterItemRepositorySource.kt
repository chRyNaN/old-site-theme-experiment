package com.chrynan.sitetheme.repository.source

import com.chrynan.sitetheme.repository.FooterItemRepository
import com.chrynan.sitetheme.viewmodel.FooterViewModel

class FooterItemRepositorySource : FooterItemRepository {

    override suspend fun getFooterItem() =
        FooterViewModel(
            siteTitle = "chRyNaN Codes",
            siteTitleLink = "chrynan.codes",
            copyrightTitle = "Copyright 2019"
        )
}