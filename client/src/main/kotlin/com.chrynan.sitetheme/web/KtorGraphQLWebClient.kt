package com.chrynan.sitetheme.web

import com.chrynan.graphqlquerybuilder.GraphQLQuery
import com.chrynan.sitetheme.query.RootQueryBuilder
import io.ktor.client.HttpClient
import io.ktor.client.request.header
import io.ktor.client.request.post

suspend inline fun <reified R> GraphQLQuery<RootQueryBuilder>.executeWith(
    baseUrl: String,
    httpClient: HttpClient
): R =
    httpClient.post(baseUrl) {
        header("Content-Type", "application/json")
        body = GraphQLQueryBody(query = toEncodedString())
    }