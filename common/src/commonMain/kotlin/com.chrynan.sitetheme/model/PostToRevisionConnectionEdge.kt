package com.chrynan.sitetheme.model

data class PostToRevisionConnectionEdge(
    override val cursor: String? = null,
    override val node: Revision
) : Edge<Revision>