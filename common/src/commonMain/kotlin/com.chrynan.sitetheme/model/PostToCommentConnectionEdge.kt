package com.chrynan.sitetheme.model

data class PostToCommentConnectionEdge(
    override val cursor: String? = null,
    override val node: Comment
) : Edge<Comment>