package com.chrynan.sitetheme.query

import com.chrynan.graphqlquerybuilder.GraphQLQueryBuilder

abstract class ConnectionQueryBuilder<NB : GraphQLQueryBuilder, EB : EdgeQueryBuilder<NB>> : GraphQLQueryBuilder() {

    abstract fun edges(builder: EB.() -> Unit)

    abstract fun nodes(builder: NB.() -> Unit)

    fun pageInfo(builder: WPPageInfoQueryBuilder.() -> Unit) =
        gqlObject(name = "pageInfo", objectBuilder = WPPageInfoQueryBuilder(), objectFieldBuilder = builder)
}