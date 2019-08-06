package com.chrynan.sitetheme.model

data class PageToCommentConnectionEdge(
    override val cursor: String? = null,
    override val node: Comment
) : Edge<Comment>