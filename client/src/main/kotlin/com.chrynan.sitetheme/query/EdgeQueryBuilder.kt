package com.chrynan.sitetheme.query

import com.chrynan.graphqlquerybuilder.GraphQLQueryBuilder

abstract class EdgeQueryBuilder<B : GraphQLQueryBuilder> : GraphQLQueryBuilder() {

    val cursor by gqlScalar(name = "scalar")

    abstract fun node(builder: B.() -> Unit)
}