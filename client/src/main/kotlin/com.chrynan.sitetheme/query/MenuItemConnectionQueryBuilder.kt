package com.chrynan.sitetheme.query

class MenuItemConnectionQueryBuilder :
    ConnectionQueryBuilder<MenuItemQueryBuilder, MenuItemEdgeQueryBuilder>() {

    override fun edges(builder: MenuItemEdgeQueryBuilder.() -> Unit) =
        gqlObject(name = "edges", objectBuilder = MenuItemEdgeQueryBuilder(), objectFieldBuilder = builder)

    override fun nodes(builder: MenuItemQueryBuilder.() -> Unit) =
        gqlObject(name = "nodes", objectBuilder = MenuItemQueryBuilder(), objectFieldBuilder = builder)
}