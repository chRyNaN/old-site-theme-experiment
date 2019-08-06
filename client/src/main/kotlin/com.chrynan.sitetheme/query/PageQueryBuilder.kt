package com.chrynan.sitetheme.query

import com.chrynan.graphqlquerybuilder.GraphQLQueryBuilder
import com.chrynan.sitetheme.model.PostObjectFieldFormat

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

    fun author(builder: UserQueryBuilder.() -> Unit) =
        gqlObject(name = "author", objectBuilder = UserQueryBuilder(), objectFieldBuilder = builder)

    fun editLast(builder: UserQueryBuilder.() -> Unit) =
        gqlObject(name = "editLast", objectBuilder = UserQueryBuilder(), objectFieldBuilder = builder)

    fun revisions(
        first: Int? = null,
        last: Int? = null,
        after: String? = null,
        before: String? = null,
        builder: RevisionConnectionQueryBuilder.() -> Unit
    ) =
        gqlObject(
            name = "revisions",
            parameters = listOf(
                gqlParam(name = "first", value = first),
                gqlParam(name = "last", value = last),
                gqlParam(name = "after", value = after),
                gqlParam(name = "before", value = before)
            ),
            objectBuilder = RevisionConnectionQueryBuilder(),
            objectFieldBuilder = builder
        )

    fun comments(
        first: Int? = null,
        last: Int? = null,
        after: String? = null,
        before: String? = null,
        builder: CommentConnectionQueryBuilder.() -> Unit
    ) =
        gqlObject(
            name = "users",
            parameters = listOf(
                gqlParam(name = "first", value = first),
                gqlParam(name = "last", value = last),
                gqlParam(name = "after", value = after),
                gqlParam(name = "before", value = before)
            ),
            objectBuilder = CommentConnectionQueryBuilder(),
            objectFieldBuilder = builder
        )

    fun content(format: PostObjectFieldFormat = PostObjectFieldFormat.RAW) =
        gqlScalarWithParams(name = "content", parameters = listOf(gqlParam(name = "format", value = format)))

    fun excerpt(format: PostObjectFieldFormat = PostObjectFieldFormat.RAW) =
        gqlScalarWithParams(name = "excerpt", parameters = listOf(gqlParam(name = "format", value = format)))

    fun title(format: PostObjectFieldFormat = PostObjectFieldFormat.RAW) =
        gqlScalarWithParams(name = "title", parameters = listOf(gqlParam(name = "format", value = format)))
}