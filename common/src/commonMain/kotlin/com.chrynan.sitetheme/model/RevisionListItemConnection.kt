package com.chrynan.sitetheme.model

data class RevisionListItemConnection(
    override val pageInfo: WPPageInfo,
    val nodes: List<RevisionListItem> = emptyList()
) : Connection