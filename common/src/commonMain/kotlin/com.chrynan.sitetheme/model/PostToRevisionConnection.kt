package com.chrynan.sitetheme.model

data class PostToRevisionConnection(
    override val edges: List<PostToRevisionConnectionEdge> = emptyList(),
    override val nodes: List<Revision> = emptyList(),
    override val pageInfo: WPPageInfo? = null
) : Connection<Revision, PostToRevisionConnectionEdge>