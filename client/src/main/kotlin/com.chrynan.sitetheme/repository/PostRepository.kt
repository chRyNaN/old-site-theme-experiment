package com.chrynan.sitetheme.repository

import com.chrynan.sitetheme.viewmodel.PostItemViewModel

interface PostRepository {

    suspend fun getMostRecentPosts(): List<PostItemViewModel>
}