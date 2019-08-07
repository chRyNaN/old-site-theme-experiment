package com.chrynan.sitetheme.web

import com.chrynan.graphqlquerybuilder.GraphQLQuery
import com.chrynan.graphqlquerybuilder.RootGraphQLQueryBuilder
import com.chrynan.graphqlquerybuilder.RootGraphQLSubscriptionBuilder
import com.chrynan.sitetheme.query.RootQueryBuilder
import io.ktor.client.HttpClient
import io.ktor.client.request.header
import io.ktor.client.request.post

class KtorGraphQLWebClient(
    val httpClient: HttpClient,
    val baseUrl: String
) {

    suspend inline fun <reified R> query(query: GraphQLQuery<RootQueryBuilder>): R =
        httpClient.post(baseUrl) {
            header("Content-Type", "application/json")
            body = GraphQLQueryBody(query = query.toEncodedString())
        }

    suspend inline fun <M : RootGraphQLQueryBuilder, reified R> mutation(query: GraphQLQuery<M>): R =
        httpClient.post(baseUrl + query.toEncodedString())

    suspend inline fun <S : RootGraphQLSubscriptionBuilder, reified R> subscription(query: GraphQLQuery<S>): R =
        httpClient.post(baseUrl + query.toEncodedString())
}