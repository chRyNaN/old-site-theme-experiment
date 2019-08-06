package com.chrynan.sitetheme.query

import com.chrynan.graphqlquerybuilder.GraphQLQueryBuilder

class MenuItemQueryBuilder : GraphQLQueryBuilder() {

    val id by gqlScalar(name = "id")

    val ccClasses by gqlScalar(name = "cssClasses")

    val description by gqlScalar(name = "description")

    val label by gqlScalar(name = "label")

    val linkRelationship by gqlScalar(name = "linkRelationship")

    val menuItemId by gqlScalar(name = "menuItemId")

    val target by gqlScalar(name = "target")

    val title by gqlScalar(name = "title")

    val url by gqlScalar(name = "url")
}