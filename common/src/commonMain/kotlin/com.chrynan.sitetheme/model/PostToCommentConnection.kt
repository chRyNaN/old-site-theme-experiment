package com.chrynan.sitetheme.model

data class PostToCommentConnection(
    override val edges: List<PostToCommentConnectionEdge> = emptyList(),
    override val nodes: List<Comment> = emptyList(),
    override val pageInfo: WPPageInfo? = null
) : Connection<Comment, PostToCommentConnectionEdge>