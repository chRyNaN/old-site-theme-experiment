package com.chrynan.sitetheme.query

class TagEdgeQueryBuilder : EdgeQueryBuilder<TagQueryBuilder>() {

    override fun node(builder: TagQueryBuilder.() -> Unit) =
        gqlObject(name = "node", objectBuilder = TagQueryBuilder(), objectFieldBuilder = builder)
}