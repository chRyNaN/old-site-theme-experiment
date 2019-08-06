package com.chrynan.sitetheme.model

data class PostToCategoryConnectionEdge(
    override val cursor: String? = null,
    override val node: Category
) : Edge<Category>