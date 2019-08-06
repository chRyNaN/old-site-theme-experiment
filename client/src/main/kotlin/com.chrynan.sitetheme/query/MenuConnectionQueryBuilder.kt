package com.chrynan.sitetheme.query

class MenuConnectionQueryBuilder : ConnectionQueryBuilder<MenuQueryBuilder, MenuEdgeQueryBuilder>() {

    override fun edges(builder: MenuEdgeQueryBuilder.() -> Unit) =
        gqlObject(name = "edges", objectBuilder = MenuEdgeQueryBuilder(), objectFieldBuilder = builder)

    override fun nodes(builder: MenuQueryBuilder.() -> Unit) =
        gqlObject(name = "nodes", objectBuilder = MenuQueryBuilder(), objectFieldBuilder = builder)
}