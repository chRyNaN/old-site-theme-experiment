package com.chrynan.sitetheme.query

import com.chrynan.graphqlquerybuilder.RootGraphQLQueryBuilder
import com.chrynan.sitetheme.model.ID

class RootQueryBuilder : RootGraphQLQueryBuilder() {

    fun category(id: ID, builder: CategoryQueryBuilder.() -> Unit) =
        gqlObject(
            name = "category",
            parameters = listOf(gqlParam(name = "id", value = id)),
            objectBuilder = CategoryQueryBuilder(),
            objectFieldBuilder = builder
        )

    fun categories(
        first: Int? = null,
        last: Int? = null,
        after: String? = null,
        before: String? = null,
        builder: CategoryConnectionQueryBuilder.() -> Unit
    ) =
        gqlObject(
            name = "categories",
            parameters = listOf(
                gqlParam(name = "first", value = first),
                gqlParam(name = "last", value = last),
                gqlParam(name = "after", value = after),
                gqlParam(name = "before", value = before)
            ),
            objectBuilder = CategoryConnectionQueryBuilder(),
            objectFieldBuilder = builder
        )

    fun comment(id: ID, builder: CommentQueryBuilder.() -> Unit) =
        gqlObject(
            name = "comment",
            parameters = listOf(gqlParam(name = "id", value = id)),
            objectBuilder = CommentQueryBuilder(),
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

    fun menu(id: ID, builder: MenuQueryBuilder.() -> Unit) =
        gqlObject(
            name = "menu",
            parameters = listOf(gqlParam(name = "id", value = id)),
            objectBuilder = MenuQueryBuilder(),
            objectFieldBuilder = builder
        )

    fun menus(
        first: Int? = null,
        last: Int? = null,
        after: String? = null,
        before: String? = null,
        builder: MenuConnectionQueryBuilder.() -> Unit
    ) =
        gqlObject(
            name = "menus",
            parameters = listOf(
                gqlParam(name = "first", value = first),
                gqlParam(name = "last", value = last),
                gqlParam(name = "after", value = after),
                gqlParam(name = "before", value = before)
            ),
            objectBuilder = MenuConnectionQueryBuilder(),
            objectFieldBuilder = builder
        )

    fun menuItem(id: ID, builder: MenuItemQueryBuilder.() -> Unit) =
        gqlObject(
            name = "menuItem",
            parameters = listOf(gqlParam(name = "id", value = id)),
            objectBuilder = MenuItemQueryBuilder(),
            objectFieldBuilder = builder
        )

    fun menuItems(
        first: Int? = null,
        last: Int? = null,
        after: String? = null,
        before: String? = null,
        builder: MenuItemConnectionQueryBuilder.() -> Unit
    ) =
        gqlObject(
            name = "menuItems",
            parameters = listOf(
                gqlParam(name = "first", value = first),
                gqlParam(name = "last", value = last),
                gqlParam(name = "after", value = after),
                gqlParam(name = "before", value = before)
            ),
            objectBuilder = MenuItemConnectionQueryBuilder(),
            objectFieldBuilder = builder
        )

    fun page(id: ID, builder: PageQueryBuilder.() -> Unit) =
        gqlObject(
            name = "page",
            parameters = listOf(gqlParam(name = "id", value = id)),
            objectBuilder = PageQueryBuilder(),
            objectFieldBuilder = builder
        )

    fun pageBy(id: ID, pageId: Int, uri: String, builder: PageQueryBuilder.() -> Unit) =
        gqlObject(
            name = "pageBy",
            parameters = listOf(
                gqlParam(name = "id", value = id),
                gqlParam(name = "pageId", value = pageId),
                gqlParam(name = "uri", value = uri)
            ),
            objectBuilder = PageQueryBuilder(),
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

    fun post(id: ID, builder: PostQueryBuilder.() -> Unit) =
        gqlObject(
            name = "post",
            parameters = listOf(gqlParam(name = "id", value = id)),
            objectBuilder = PostQueryBuilder(),
            objectFieldBuilder = builder
        )

    fun postBy(id: ID, postId: Int, uri: String, builder: PostQueryBuilder.() -> Unit) =
        gqlObject(
            name = "postBy",
            parameters = listOf(
                gqlParam(name = "id", value = id),
                gqlParam(name = "postId", value = postId),
                gqlParam(name = "uri", value = uri)
            ),
            objectBuilder = PostQueryBuilder(),
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
            name = "categories",
            parameters = listOf(
                gqlParam(name = "first", value = first),
                gqlParam(name = "last", value = last),
                gqlParam(name = "after", value = after),
                gqlParam(name = "before", value = before)
            ),
            objectBuilder = PostConnectionQueryBuilder(),
            objectFieldBuilder = builder
        )

    fun revision(id: ID, builder: RevisionQueryBuilder.() -> Unit) =
        gqlObject(
            name = "revision",
            parameters = listOf(gqlParam(name = "id", value = id)),
            objectBuilder = RevisionQueryBuilder(),
            objectFieldBuilder = builder
        )

    fun revisionBy(id: ID, revisionId: Int, uri: String, builder: RevisionQueryBuilder.() -> Unit) =
        gqlObject(
            name = "revisionBy",
            parameters = listOf(
                gqlParam(name = "id", value = id),
                gqlParam(name = "revisionId", value = revisionId),
                gqlParam(name = "uri", value = uri)
            ),
            objectBuilder = RevisionQueryBuilder(),
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

    fun tag(id: ID, builder: TagQueryBuilder.() -> Unit) =
        gqlObject(
            name = "tag",
            parameters = listOf(gqlParam(name = "id", value = id)),
            objectBuilder = TagQueryBuilder(),
            objectFieldBuilder = builder
        )

    fun tags(
        first: Int? = null,
        last: Int? = null,
        after: String? = null,
        before: String? = null,
        builder: TagConnectionQueryBuilder.() -> Unit
    ) =
        gqlObject(
            name = "tags",
            parameters = listOf(
                gqlParam(name = "first", value = first),
                gqlParam(name = "last", value = last),
                gqlParam(name = "after", value = after),
                gqlParam(name = "before", value = before)
            ),
            objectBuilder = TagConnectionQueryBuilder(),
            objectFieldBuilder = builder
        )

    fun user(id: ID, builder: UserQueryBuilder.() -> Unit) =
        gqlObject(
            name = "user",
            parameters = listOf(gqlParam(name = "id", value = id)),
            objectBuilder = UserQueryBuilder(),
            objectFieldBuilder = builder
        )

    fun users(
        first: Int? = null,
        last: Int? = null,
        after: String? = null,
        before: String? = null,
        builder: UserConnectionQueryBuilder.() -> Unit
    ) =
        gqlObject(
            name = "users",
            parameters = listOf(
                gqlParam(name = "first", value = first),
                gqlParam(name = "last", value = last),
                gqlParam(name = "after", value = after),
                gqlParam(name = "before", value = before)
            ),
            objectBuilder = UserConnectionQueryBuilder(),
            objectFieldBuilder = builder
        )

    fun viewer(builder: UserQueryBuilder.() -> Unit) =
        gqlObject(
            name = "viewer",
            objectBuilder = UserQueryBuilder(),
            objectFieldBuilder = builder
        )
}