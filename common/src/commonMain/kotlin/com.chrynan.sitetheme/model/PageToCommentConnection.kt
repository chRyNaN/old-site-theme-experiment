package com.chrynan.sitetheme.model

data class PageToCommentConnection(
    override val edges: List<PageToCommentConnectionEdge> = emptyList(),
    override val nodes: List<Comment> = emptyList(),
    override val pageInfo: WPPageInfo? = null
) : Connection<Comment, PageToCommentConnectionEdge>