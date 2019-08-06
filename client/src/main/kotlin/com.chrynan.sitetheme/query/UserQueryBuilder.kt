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
}