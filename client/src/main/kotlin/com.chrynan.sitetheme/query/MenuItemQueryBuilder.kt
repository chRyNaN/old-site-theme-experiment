package com.chrynan.sitetheme.query

import com.chrynan.graphqlquerybuilder.GraphQLQueryBuilder

class MenuItemQueryBuilder : GraphQLQueryBuilder() {

    val id by gqlScalar(name = "id")

    val cssClasses by gqlScalar(name = "cssClasses")

    val description by gqlScalar(name = "description")

    val label by gqlScalar(name = "label")

    val linkRelationship by gqlScalar(name = "linkRelationship")

    val menuItemId by gqlScalar(name = "menuItemId")

    val target by gqlScalar(name = "target")

    val title by gqlScalar(name = "title")

    val url by gqlScalar(name = "url")

    fun childItems(
        first: Int? = null,
        last: Int? = null,
        after: String? = null,
        before: String? = null,
        builder: MenuItemConnectionQueryBuilder.() -> Unit
    ) =
        gqlObject(
            name = "childItems",
            parameters = listOf(
                gqlParam(name = "first", value = first),
                gqlParam(name = "last", value = last),
                gqlParam(name = "after", value = after),
                gqlParam(name = "before", value = before)
            ),
            objectBuilder = MenuItemConnectionQueryBuilder(),
            objectFieldBuilder = builder
        )
}