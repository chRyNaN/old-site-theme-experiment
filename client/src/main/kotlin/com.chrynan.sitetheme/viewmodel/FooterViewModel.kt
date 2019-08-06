package com.chrynan.sitetheme.viewmodel

data class FooterViewModel(
    val siteTitle: String,
    val siteTitleLink: String,
    val copyrightTitle: String? = null,
    val copyrightTitleLink: String? = null,
    val navigationMenus: List<NavigationMenuViewModel> = emptyList()
)