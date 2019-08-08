package com.chrynan.sitetheme.source

import com.chrynan.graphqlquerybuilder.rangeTo
import com.chrynan.sitetheme.model.Cursor
import com.chrynan.sitetheme.model.PostListItemConnection
import com.chrynan.sitetheme.query.query
import com.chrynan.sitetheme.repository.PostRepository
import com.chrynan.sitetheme.web.executeWith
import io.ktor.client.HttpClient
import io.ktor.client.engine.js.Js
import io.ktor.client.features.json.JsonFeature
import io.ktor.client.features.logging.DEFAULT
import io.ktor.client.features.logging.LogLevel
import io.ktor.client.features.logging.Logger
import io.ktor.client.features.logging.Logging

class PostRepositorySource : PostRepository {

    private val httpClient = HttpClient(Js) {
        install(JsonFeature)
        install(Logging) {
            logger = Logger.DEFAULT
            level = LogLevel.ALL
        }
    }

    override suspend fun getPostListItemsAfter(first: Int, after: Cursor): PostListItemConnection {
        val query = query {
            posts(first = first, after = after) {
                pageInfo {
                    this..pageInfoFragment
                }
                edges {
                    cursor
                    node {
                        this..postListItemFragment
                    }
                }
                nodes {
                    this..postListItemFragment
                }
            }
        }

        console.log("executeWith = ${query.toDecodedString()}")

        return query.executeWith(httpClient = httpClient, baseUrl = "https://chrynan.codes")
    }

    override suspend fun getPostListItemsBefore(last: Int, before: Cursor): PostListItemConnection {
        val query = query {
            posts(last = last, before = before) {
                pageInfo {
                    this..pageInfoFragment
                }
                edges {
                    cursor
                    node {
                        this..postListItemFragment
                    }
                }
                nodes {
                    this..postListItemFragment
                }
            }
        }

        return query.executeWith(httpClient = httpClient, baseUrl = "https://chrynan.codes")
    }
}