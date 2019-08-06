package com.chrynan.sitetheme.query

class MenuEdgeQueryBuilder : EdgeQueryBuilder<MenuQueryBuilder>() {

    override fun node(builder: MenuQueryBuilder.() -> Unit) =
        gqlObject(name = "node", objectBuilder = MenuQueryBuilder(), objectFieldBuilder = builder)
}