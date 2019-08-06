package com.chrynan.sitetheme.viewmodel

data class NavigationMenuViewModel(
    val name: String,
    val items: List<NavigationMenuItemViewModel> = emptyList()
)