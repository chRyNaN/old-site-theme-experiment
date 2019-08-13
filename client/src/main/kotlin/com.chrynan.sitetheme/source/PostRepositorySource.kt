package com.chrynan.sitetheme.source

import com.chrynan.graphqlquerybuilder.rangeTo
import com.chrynan.sitetheme.model.Cursor
import com.chrynan.sitetheme.model.PostListItemConnection
import com.chrynan.sitetheme.query.query
import com.chrynan.sitetheme.repository.PostRepository
import com.chrynan.sitetheme.web.executeWith
import io.ktor.client.HttpClient

class PostRepositorySource(private val httpClient: HttpClient) : PostRepository {

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