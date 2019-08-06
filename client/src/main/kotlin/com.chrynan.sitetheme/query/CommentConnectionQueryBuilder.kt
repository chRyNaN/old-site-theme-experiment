package com.chrynan.sitetheme.query

class CommentConnectionQueryBuilder :
    ConnectionQueryBuilder<CommentQueryBuilder, CommentEdgeQueryBuilder>() {

    override fun edges(builder: CommentEdgeQueryBuilder.() -> Unit) =
        gqlObject(name = "edges", objectBuilder = CommentEdgeQueryBuilder(), objectFieldBuilder = builder)

    override fun nodes(builder: CommentQueryBuilder.() -> Unit) =
        gqlObject(name = "nodes", objectBuilder = CommentQueryBuilder(), objectFieldBuilder = builder)
}