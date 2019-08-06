package com.chrynan.sitetheme.model

data class RootQueryToUserConnectionEdge(
    override val cursor: String? = null,
    override val node: User
) : Edge<User>