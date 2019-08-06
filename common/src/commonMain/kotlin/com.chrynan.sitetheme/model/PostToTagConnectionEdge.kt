package com.chrynan.sitetheme.model

data class PostToTagConnectionEdge(
    override val cursor: String? = null,
    override val node: Tag
) : Edge<Tag>