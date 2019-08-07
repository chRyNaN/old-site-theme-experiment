package com.chrynan.sitetheme.web

class GraphQLQueryBody(
    val query: String,
    val operationName: String? = null,
    val variables: Map<String, Any>? = null
)