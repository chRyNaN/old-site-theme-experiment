package com.chrynan.sitetheme.model

data class PostListItem(
    override val id: ID,
    val commentCount: Int,
    val date: String,
    val link: String,
    val uri: String,
    val title: String,
    val excerpt: String,
    val tags: TagListItemConnection,
    val revisions: RevisionListItemConnection,
    val categories: CategoryListItemConnection
) : Node