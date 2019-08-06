package com.chrynan.sitetheme.model

data class PageToRevisionConnectionEdge(
    override val cursor: String? = null,
    override val node: Revision
) : Edge<Revision>