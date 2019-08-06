package com.chrynan.sitetheme.query

import com.chrynan.graphqlquerybuilder.GraphQLQueryBuilder

class MenuQueryBuilder : GraphQLQueryBuilder() {

    val id by gqlScalar(name = "id")

    val count by gqlScalar(name = "count")

    val menuId by gqlScalar(name = "menuId")

    val menu by gqlScalar(name = "menu")

    val slug by gqlScalar(name = "slug")
}