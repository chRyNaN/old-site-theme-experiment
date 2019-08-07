package com.chrynan.sitetheme.model

data class CategoryListItemConnection(
    override val pageInfo: WPPageInfo,
    val nodes: List<CategoryListItem> = emptyList()
) : Connection