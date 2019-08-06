package com.chrynan.sitetheme.query

import com.chrynan.graphqlquerybuilder.GraphQLQueryBuilder
import com.chrynan.sitetheme.model.PostObjectFieldFormat

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

    fun children(
        first: Int? = null,
        last: Int? = null,
        after: String? = null,
        before: String? = null,
        builder: CommentConnectionQueryBuilder.() -> Unit
    ) =
        gqlObject(
            name = "children",
            parameters = listOf(
                gqlParam(name = "first", value = first),
                gqlParam(name = "last", value = last),
                gqlParam(name = "after", value = after),
                gqlParam(name = "before", value = before)
            ),
            objectBuilder = CommentConnectionQueryBuilder(),
            objectFieldBuilder = builder
        )

    fun parent(builder: CommentQueryBuilder.() -> Unit) =
        gqlObject(name = "parent", objectBuilder = CommentQueryBuilder(), objectFieldBuilder = builder)

    fun content(format: PostObjectFieldFormat = PostObjectFieldFormat.RAW) =
        gqlScalarWithParams(
            name = "content",
            parameters = listOf(gqlParam(name = "format", value = format))
        )

    fun author(builder: UserQueryBuilder.() -> Unit) =
        gqlObject(name = "author", objectBuilder = UserQueryBuilder(), objectFieldBuilder = builder)
}