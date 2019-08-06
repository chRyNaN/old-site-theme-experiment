package com.chrynan.sitetheme.query

import com.chrynan.graphqlquerybuilder.GraphQLQueryBuilder

class CategoryQueryBuilder : GraphQLQueryBuilder() {

    val id by gqlScalar(name = "id")

    val categoryId by gqlScalar(name = "categoryId")

    val count by gqlScalar(name = "count")

    val description by gqlScalar(name = "description")

    val link by gqlScalar(name = "link")

    val name by gqlScalar(name = "name")

    val slug by gqlScalar(name = "slug")

    val termGroupId by gqlScalar(name = "termGroupId")
}