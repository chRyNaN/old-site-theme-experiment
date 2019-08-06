package com.chrynan.sitetheme.query

import com.chrynan.graphqlquerybuilder.GraphQLQueryBuilder

class MenuQueryBuilder : GraphQLQueryBuilder() {

    val id by gqlScalar(name = "id")

    val count by gqlScalar(name = "count")

    val menuId by gqlScalar(name = "menuId")

    val menu by gqlScalar(name = "menu")

    val slug by gqlScalar(name = "slug")

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
}