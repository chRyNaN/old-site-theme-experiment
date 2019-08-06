package com.chrynan.sitetheme.model

class RootQueryToMenuConnection(
    override val edges: List<RootQueryToMenuConnectionEdge> = emptyList(),
    override val nodes: List<Menu> = emptyList(),
    override val pageInfo: WPPageInfo? = null
) : Connection<Menu, RootQueryToMenuConnectionEdge>