package com.chrynan.sitetheme.source

import com.chrynan.graphqlquerybuilder.rangeTo
import com.chrynan.sitetheme.model.Cursor
import com.chrynan.sitetheme.model.PostListItemConnection
import com.chrynan.sitetheme.query.query
import com.chrynan.sitetheme.repository.PostRepository
import com.chrynan.sitetheme.web.KtorGraphQLWebClient

class PostRepositorySource(private val webClient: KtorGraphQLWebClient) : PostRepository {

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

        console.log("query = $query")

        return webClient.query(query)
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

        return webClient.query(query)
    }
}