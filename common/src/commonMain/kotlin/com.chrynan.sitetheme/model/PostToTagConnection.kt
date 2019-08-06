package com.chrynan.sitetheme.model

data class PostToTagConnection(
    override val edges: List<PostToTagConnectionEdge> = emptyList(),
    override val nodes: List<Tag> = emptyList(),
    override val pageInfo: WPPageInfo? = null
) : Connection<Tag, PostToTagConnectionEdge>