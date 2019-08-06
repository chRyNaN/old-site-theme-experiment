package com.chrynan.sitetheme.model

data class MenuToMenuItemConnection(
    override val edges: List<MenuToMenuItemConnectionEdge> = emptyList(),
    override val nodes: List<MenuItem> = emptyList(),
    override val pageInfo: WPPageInfo? = null
) : Connection<MenuItem, MenuToMenuItemConnectionEdge>