package com.chrynan.sitetheme.model

data class RevisionListItem(
    override val id: ID,
    val revisionId: ID,
    val link: String,
    val uri: String,
    val date: String,
    val title: String,
    val excerpt: String
) : Node