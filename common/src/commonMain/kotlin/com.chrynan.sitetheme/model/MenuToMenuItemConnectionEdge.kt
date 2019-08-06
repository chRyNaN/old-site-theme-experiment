package com.chrynan.sitetheme.model

data class MenuToMenuItemConnectionEdge(
    override val cursor: String? = null,
    override val node: MenuItem
) : Edge<MenuItem>