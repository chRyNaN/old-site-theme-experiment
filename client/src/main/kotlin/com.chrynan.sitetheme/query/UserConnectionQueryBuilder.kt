package com.chrynan.sitetheme.query

class UserConnectionQueryBuilder : ConnectionQueryBuilder<UserQueryBuilder, UserEdgeQueryBuilder>() {

    override fun edges(builder: UserEdgeQueryBuilder.() -> Unit) =
        gqlObject(name = "edges", objectBuilder = UserEdgeQueryBuilder(), objectFieldBuilder = builder)

    override fun nodes(builder: UserQueryBuilder.() -> Unit) =
        gqlObject(name = "nodes", objectBuilder = UserQueryBuilder(), objectFieldBuilder = builder)
}