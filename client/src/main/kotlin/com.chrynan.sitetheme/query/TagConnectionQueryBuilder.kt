package com.chrynan.sitetheme.query

class TagConnectionQueryBuilder : ConnectionQueryBuilder<TagQueryBuilder, TagEdgeQueryBuilder>() {

    override fun edges(builder: TagEdgeQueryBuilder.() -> Unit) =
        gqlObject(name = "edges", objectBuilder = TagEdgeQueryBuilder(), objectFieldBuilder = builder)

    override fun nodes(builder: TagQueryBuilder.() -> Unit) =
        gqlObject(name = "nodes", objectBuilder = TagQueryBuilder(), objectFieldBuilder = builder)
}