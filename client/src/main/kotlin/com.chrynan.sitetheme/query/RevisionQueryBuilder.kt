package com.chrynan.sitetheme.query

import com.chrynan.graphqlquerybuilder.GraphQLQueryBuilder

class RevisionQueryBuilder : GraphQLQueryBuilder() {

    val id by gqlScalar(name = "id")

    val commentStatus by gqlScalar(name = "commentStatus")

    val date by gqlScalar(name = "date")

    val desiredSlug by gqlScalar(name = "desiredSlug")

    val enclosure by gqlScalar(name = "enclosure")

    val guid by gqlScalar(name = "guid")

    val link by gqlScalar(name = "link")

    val menuOrder by gqlScalar(name = "menuOrder")

    val modified by gqlScalar(name = "modified")

    val revisionId by gqlScalar(name = "revisionId")

    val slug by gqlScalar(name = "slug")

    val uri by gqlScalar(name = "uri")

    fun author(builder: UserQueryBuilder.() -> Unit) =
        gqlObject(name = "author", objectBuilder = UserQueryBuilder(), objectFieldBuilder = builder)

    fun editLast(builder: UserQueryBuilder.() -> Unit) =
        gqlObject(name = "editLast", objectBuilder = UserQueryBuilder(), objectFieldBuilder = builder)
}