package com.chrynan.sitetheme.query

class CategoryConnectionQueryBuilder :
    ConnectionQueryBuilder<CategoryQueryBuilder, CategoryEdgeQueryBuilder>() {

    override fun edges(builder: CategoryEdgeQueryBuilder.() -> Unit) =
        gqlObject(name = "edges", objectBuilder = CategoryEdgeQueryBuilder(), objectFieldBuilder = builder)

    override fun nodes(builder: CategoryQueryBuilder.() -> Unit) =
        gqlObject(name = "nodes", objectBuilder = CategoryQueryBuilder(), objectFieldBuilder = builder)
}