package com.chrynan.sitetheme.model

data class TagListItem(
    override val id: ID,
    val tagId: ID,
    val link: String,
    val name: String,
    val description: String
) : Node