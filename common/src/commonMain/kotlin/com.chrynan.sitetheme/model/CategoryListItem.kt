package com.chrynan.sitetheme.model

data class CategoryListItem(
    override val id: ID,
    val categoryId: ID,
    val link: String,
    val name: String,
    val description: String
) : Node