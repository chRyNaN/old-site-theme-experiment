package com.chrynan.sitetheme.model

data class RootQueryToPageConnection(
    override val edges: List<RootQueryToPageConnectionEdge> = emptyList(),
    override val nodes: List<Page> = emptyList(),
    override val pageInfo: WPPageInfo? = null
) : Connection<Page, RootQueryToPageConnectionEdge>