package com.chrynan.sitetheme.model

data class RootQueryToUserConnection(
    override val edges: List<RootQueryToUserConnectionEdge> = emptyList(),
    override val nodes: List<User> = emptyList(),
    override val pageInfo: WPPageInfo? = null
) : Connection<User, RootQueryToUserConnectionEdge>