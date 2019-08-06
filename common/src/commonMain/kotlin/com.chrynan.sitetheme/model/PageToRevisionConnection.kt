package com.chrynan.sitetheme.model

data class PageToRevisionConnection(
    override val edges: List<PageToRevisionConnectionEdge> = emptyList(),
    override val nodes: List<Revision> = emptyList(),
    override val pageInfo: WPPageInfo? = null
) : Connection<Revision, PageToRevisionConnectionEdge>