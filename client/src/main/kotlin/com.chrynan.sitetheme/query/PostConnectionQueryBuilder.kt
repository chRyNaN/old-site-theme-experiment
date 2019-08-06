package com.chrynan.sitetheme.query

class PostConnectionQueryBuilder : ConnectionQueryBuilder<PostQueryBuilder, PostEdgeQueryBuilder>() {

    override fun edges(builder: PostEdgeQueryBuilder.() -> Unit) =
        gqlObject(name = "edges", objectBuilder = PostEdgeQueryBuilder(), objectFieldBuilder = builder)

    override fun nodes(builder: PostQueryBuilder.() -> Unit) =
        gqlObject(name = "nodes", objectBuilder = PostQueryBuilder(), objectFieldBuilder = builder)
}