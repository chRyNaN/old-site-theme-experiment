package com.chrynan.sitetheme.model

data class TagListItemConnection(
    override val pageInfo: WPPageInfo,
    val nodes: List<TagListItem> = emptyList()
) : Connection