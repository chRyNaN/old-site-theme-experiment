package com.chrynan.sitetheme.query

import com.chrynan.graphqlquerybuilder.GraphQLQueryBuilder
import com.chrynan.graphqlquerybuilder.fragment
import com.chrynan.graphqlquerybuilder.rangeTo

class CategoryQueryBuilder : GraphQLQueryBuilder() {

    val id by gqlScalar(name = "id")

    val categoryId by gqlScalar(name = "categoryId")

    val count by gqlScalar(name = "count")

    val description by gqlScalar(name = "description")

    val link by gqlScalar(name = "link")

    val name by gqlScalar(name = "name")

    val slug by gqlScalar(name = "slug")

    val termGroupId by gqlScalar(name = "termGroupId")

    fun children(
        first: Int? = null,
        last: Int? = null,
        after: String? = null,
        before: String? = null,
        builder: CategoryConnectionQueryBuilder.() -> Unit
    ) =
        gqlObject(
            name = "children",
            parameters = listOf(
                gqlParam(name = "first", value = first),
                gqlParam(name = "last", value = last),
                gqlParam(name = "after", value = after),
                gqlParam(name = "before", value = before)
            ),
            objectBuilder = CategoryConnectionQueryBuilder(),
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
}

val categoryListItemFragment = fragment<CategoryQueryBuilder>() on {
    id
    categoryId
    link
    name
    description
}

val revisionListItemFragment = fragment<RevisionQueryBuilder>() on {
    id
    revisionId
    link
    uri
    date
    title()
    excerpt()
}

val tagListItemFragment = fragment<TagQueryBuilder>() on {
    id
    tagId
    link
    name
    description
}

fun test(post: PostQueryBuilder) {
    post.apply {
        id
        commentCount
        date
        link
        uri
        title()
        excerpt()
        tags {
            nodes {
                this..tagListItemFragment
            }
        }
        revisions {
            nodes {
                this..revisionListItemFragment
            }
        }
        categories {
            nodes {
                this..categoryListItemFragment
            }
        }
    }
}