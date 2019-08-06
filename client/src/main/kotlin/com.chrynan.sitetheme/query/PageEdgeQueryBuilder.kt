package com.chrynan.sitetheme.query

class PageEdgeQueryBuilder : EdgeQueryBuilder<PageQueryBuilder>() {

    override fun node(builder: PageQueryBuilder.() -> Unit) =
        gqlObject(name = "node", objectBuilder = PageQueryBuilder(), objectFieldBuilder = builder)
}