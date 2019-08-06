package com.chrynan.sitetheme.query

class PageConnectionQueryBuilder : ConnectionQueryBuilder<PageQueryBuilder, PageEdgeQueryBuilder>() {

    override fun edges(builder: PageEdgeQueryBuilder.() -> Unit) =
        gqlObject(name = "edges", objectBuilder = PageEdgeQueryBuilder(), objectFieldBuilder = builder)

    override fun nodes(builder: PageQueryBuilder.() -> Unit) =
        gqlObject(name = "nodes", objectBuilder = PageQueryBuilder(), objectFieldBuilder = builder)
}