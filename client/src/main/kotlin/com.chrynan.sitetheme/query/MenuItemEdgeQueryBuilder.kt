package com.chrynan.sitetheme.query

class MenuItemEdgeQueryBuilder : EdgeQueryBuilder<MenuItemQueryBuilder>() {

    override fun node(builder: MenuItemQueryBuilder.() -> Unit) =
        gqlObject(name = "node", objectBuilder = MenuItemQueryBuilder(), objectFieldBuilder = builder)
}