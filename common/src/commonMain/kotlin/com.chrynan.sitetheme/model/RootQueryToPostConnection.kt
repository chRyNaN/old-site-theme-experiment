package com.chrynan.sitetheme.model

data class RootQueryToPostConnection(
    override val edges: List<RootQueryToPostConnectionEdge> = emptyList(),
    override val nodes: List<Post> = emptyList(),
    override val pageInfo: WPPageInfo? = null
) : Connection<Post, RootQueryToPostConnectionEdge>