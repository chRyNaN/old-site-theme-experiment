package com.chrynan.sitetheme.query

fun query(builder: RootQueryBuilder.() -> Unit) =
    com.chrynan.graphqlquerybuilder.query(builder = RootQueryBuilder(), query = builder)