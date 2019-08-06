package com.chrynan.sitetheme.query

import com.chrynan.graphqlquerybuilder.GraphQLQueryBuilder

class AvatarQueryBuilder : GraphQLQueryBuilder() {

    val default by gqlScalar(name = "default")

    val extraAttr by gqlScalar(name = "extraAttr")

    val forceDefault by gqlScalar(name = "forceDefault")

    val foundAvatar by gqlScalar(name = "foundAvatar")

    val height by gqlScalar(name = "height")

    val width by gqlScalar(name = "width")

    val rating by gqlScalar(name = "rating")

    val url by gqlScalar(name = "url")

    val size by gqlScalar(name = "size")
}