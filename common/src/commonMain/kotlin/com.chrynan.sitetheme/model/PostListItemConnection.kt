package com.chrynan.sitetheme.model

data class PostListItemConnection(
    override val pageInfo: WPPageInfo,
    val edges: List<PostListItemEdge> = emptyList(),
    val nodes: List<PostListItem> = emptyList()
) : Connection