package com.chrynan.sitetheme.query

class CommentEdgeQueryBuilder : EdgeQueryBuilder<CommentQueryBuilder>() {

    override fun node(builder: CommentQueryBuilder.() -> Unit) =
        gqlObject(name = "node", objectBuilder = CommentQueryBuilder(), objectFieldBuilder = builder)
}