package com.chrynan.sitetheme.query

import com.chrynan.graphqlquerybuilder.GraphQLQueryBuilder

class PostQueryBuilder : GraphQLQueryBuilder() {

    val id by gqlScalar(name = "id")

    val commentCount by gqlScalar(name = "commentCount")

    val commentStatus by gqlScalar(name = "commentStatus")

    val date by gqlScalar(name = "date")

    val desiredSlug by gqlScalar(name = "desiredSlug")

    val enclosure by gqlScalar(name = "enclosure")

    val featuredImage by gqlScalar(name = "featuredImage")

    val guid by gqlScalar(name = "guid")

    val link by gqlScalar(name = "link")

    val modified by gqlScalar(name = "modified")

    val postId by gqlScalar(name = "postId")

    val slug by gqlScalar(name = "slug")

    val status by gqlScalar(name = "status")

    val uri by gqlScalar(name = "uri")

    val excerpt by gqlScalar(name = "excerpt")

    val content by gqlScalar(name = "content")

    val title by gqlScalar(name = "title")

    fun author(builder: UserQueryBuilder.() -> Unit) =
        gqlObject(name = "author", objectBuilder = UserQueryBuilder(), objectFieldBuilder = builder)

    fun editLast(builder: UserQueryBuilder.() -> Unit) =
        gqlObject(name = "editLast", objectBuilder = UserQueryBuilder(), objectFieldBuilder = builder)

    // TODO categories, tags, revisions, comments
}