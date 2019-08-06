package com.chrynan.sitetheme.query

import com.chrynan.graphqlquerybuilder.GraphQLQueryBuilder

class TagQueryBuilder : GraphQLQueryBuilder() {

    val id by gqlScalar(name = "id")

    val count by gqlScalar(name = "count")

    val description by gqlScalar(name = "description")

    val link by gqlScalar(name = "link")

    val name by gqlScalar(name = "name")

    val slug by gqlScalar(name = "slug")

    val tagId by gqlScalar(name = "tagId")

    val termGroupId by gqlScalar(name = "termGroupId")
}