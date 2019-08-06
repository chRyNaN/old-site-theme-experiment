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

    fun posts(
        first: Int? = null,
        last: Int? = null,
        after: String? = null,
        before: String? = null,
        builder: PostConnectionQueryBuilder.() -> Unit
    ) =
        gqlObject(
            name = "posts",
            parameters = listOf(
                gqlParam(name = "first", value = first),
                gqlParam(name = "last", value = last),
                gqlParam(name = "after", value = after),
                gqlParam(name = "before", value = before)
            ),
            objectBuilder = PostConnectionQueryBuilder(),
            objectFieldBuilder = builder
        )
}