package com.chrynan.sitetheme.model

data class RootQueryToMenuConnectionEdge(
    override val cursor: String? = null,
    override val node: Menu
) : Edge<Menu>