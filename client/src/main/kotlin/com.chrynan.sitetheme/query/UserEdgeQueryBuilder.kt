package com.chrynan.sitetheme.query

class UserEdgeQueryBuilder : EdgeQueryBuilder<UserQueryBuilder>() {

    override fun node(builder: UserQueryBuilder.() -> Unit) =
        gqlObject(name = "node", objectBuilder = UserQueryBuilder(), objectFieldBuilder = builder)
}