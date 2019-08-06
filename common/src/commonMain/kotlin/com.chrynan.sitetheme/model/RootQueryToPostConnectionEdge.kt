package com.chrynan.sitetheme.model

data class RootQueryToPostConnectionEdge(
    override val cursor: String? = null,
    override val node: Post
) : Edge<Post>