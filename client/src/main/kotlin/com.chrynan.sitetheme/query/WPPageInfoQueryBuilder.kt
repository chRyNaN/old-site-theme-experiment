package com.chrynan.sitetheme.query

import com.chrynan.graphqlquerybuilder.GraphQLQueryBuilder

class WPPageInfoQueryBuilder : GraphQLQueryBuilder() {

    val endCursor by gqlScalar(name = "endCursor")

    val hasNextPage by gqlScalar(name = "hasNextPage")

    val hasPreviousPage by gqlScalar(name = "hasPreviousPage")

    val startCursor by gqlScalar(name = "startScalar")
}