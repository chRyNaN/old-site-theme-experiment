package com.chrynan.sitetheme.repository

import com.chrynan.sitetheme.model.Cursor
import com.chrynan.sitetheme.model.PostListItemConnection

interface PostRepository {

    suspend fun getPostListItemsAfter(first: Int, after: Cursor): PostListItemConnection

    suspend fun getPostListItemsBefore(last: Int, before: Cursor): PostListItemConnection
}