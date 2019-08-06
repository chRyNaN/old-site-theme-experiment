package com.chrynan.sitetheme.query

import com.chrynan.graphqlquerybuilder.GraphQLQueryBuilder

class UserQueryBuilder : GraphQLQueryBuilder() {

    val description by gqlScalar(name = "description")

    val email by gqlScalar(name = "email")

    val firstName by gqlScalar(name = "firstName")

    val lastName by gqlScalar(name = "lastName")

    val locale by gqlScalar(name = "locale")

    val name by gqlScalar(name = "name")

    val nicename by gqlScalar(name = "nicename")

    val nickname by gqlScalar(name = "nickname")

    val registeredDate by gqlScalar(name = "registeredDate")

    val slug by gqlScalar(name = "slug")

    val url by gqlScalar(name = "url")

    val userId by gqlScalar(name = "userId")

    val username by gqlScalar(name = "username")

    fun avatar(builder: AvatarQueryBuilder.() -> Unit) =
        gqlObject(name = "avatar", objectBuilder = AvatarQueryBuilder(), objectFieldBuilder = builder)

    fun comments(
        first: Int? = null,
        last: Int? = null,
        after: String? = null,
        before: String? = null,
        builder: CommentConnectionQueryBuilder.() -> Unit
    ) =
        gqlObject(
            name = "comments",
            parameters = listOf(
                gqlParam(name = "first", value = first),
                gqlParam(name = "last", value = last),
                gqlParam(name = "after", value = after),
                gqlParam(name = "before", value = before)
            ),
            objectBuilder = CommentConnectionQueryBuilder(),
            objectFieldBuilder = builder
        )

    fun pages(
        first: Int? = null,
        last: Int? = null,
        after: String? = null,
        before: String? = null,
        builder: PageConnectionQueryBuilder.() -> Unit
    ) =
        gqlObject(
            name = "pages",
            parameters = listOf(
                gqlParam(name = "first", value = first),
                gqlParam(name = "last", value = last),
                gqlParam(name = "after", value = after),
                gqlParam(name = "before", value = before)
            ),
            objectBuilder = PageConnectionQueryBuilder(),
            objectFieldBuilder = builder
        )

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
}