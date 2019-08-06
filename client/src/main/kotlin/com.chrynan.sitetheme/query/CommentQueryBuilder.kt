package com.chrynan.sitetheme.query

import com.chrynan.graphqlquerybuilder.GraphQLQueryBuilder

class CommentQueryBuilder : GraphQLQueryBuilder() {

    val id by gqlScalar(name = "id")

    val agent by gqlScalar(name = "agent")

    val approved by gqlScalar(name = "approved")

    val authorIp by gqlScalar(name = "authorIp")

    val commentId by gqlScalar(name = "commentId")

    val date by gqlScalar(name = "date")

    val restricted by gqlScalar(name = "restricted")

    val karma by gqlScalar(name = "karma")

    val type by gqlScalar(name = "type")
}