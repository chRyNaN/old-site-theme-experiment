package com.chrynan.sitetheme.query

import com.chrynan.graphqlquerybuilder.GraphQLQueryBuilder
import com.chrynan.sitetheme.model.PostObjectFieldFormat

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

    fun content(format: PostObjectFieldFormat = PostObjectFieldFormat.RAW) =
        gqlScalarWithParams(
            name = "content",
            parameters = listOf(gqlParam(name = "format", value = format))
        )

    fun excerpt(format: PostObjectFieldFormat = PostObjectFieldFormat.RAW) =
        gqlScalarWithParams(
            name = "excerpt",
            parameters = listOf(gqlParam(name = "format", value = format))
        )

    fun title(format: PostObjectFieldFormat = PostObjectFieldFormat.RAW) =
        gqlScalarWithParams(
            name = "title",
            parameters = listOf(gqlParam(name = "format", value = format))
        )
}