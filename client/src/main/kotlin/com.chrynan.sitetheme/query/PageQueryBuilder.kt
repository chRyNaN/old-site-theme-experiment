package com.chrynan.sitetheme.query

import com.chrynan.graphqlquerybuilder.GraphQLQueryBuilder

class PageQueryBuilder : GraphQLQueryBuilder() {

    val id by gqlScalar(name = "id")

    val commentCount by gqlScalar(name = "commentCount")

    val commentStatus by gqlScalar(name = "commentStatus")

    val date by gqlScalar(name = "date")

    val desiredSlug by gqlScalar(name = "desiredSlug")

    val enclosure by gqlScalar(name = "enclosure")

    val guid by gqlScalar(name = "guid")

    val link by gqlScalar(name = "link")

    val modified by gqlScalar(name = "modified")

    val pageId by gqlScalar(name = "pageId")

    val slug by gqlScalar(name = "slug")

    val uri by gqlScalar(name = "uri")

    val content by gqlScalar(name = "content")

    val excerpt by gqlScalar(name = "excerpt")

    fun author(builder: UserQueryBuilder.() -> Unit) =
        gqlObject(name = "author", objectBuilder = UserQueryBuilder(), objectFieldBuilder = builder)

    fun editLast(builder: UserQueryBuilder.() -> Unit) =
        gqlObject(name = "editLast", objectBuilder = UserQueryBuilder(), objectFieldBuilder = builder)

    // TODO revisions and comments
}