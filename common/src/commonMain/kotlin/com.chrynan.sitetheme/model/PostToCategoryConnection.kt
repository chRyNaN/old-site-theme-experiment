package com.chrynan.sitetheme.model

data class PostToCategoryConnection(
    override val edges: List<PostToCategoryConnectionEdge> = emptyList(),
    override val nodes: List<Category> = emptyList(),
    override val pageInfo: WPPageInfo? = null
) : Connection<Category, PostToCategoryConnectionEdge>