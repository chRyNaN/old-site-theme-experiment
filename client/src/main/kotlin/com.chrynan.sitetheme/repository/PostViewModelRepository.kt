package com.chrynan.sitetheme.repository

import com.chrynan.sitetheme.viewmodel.PostItemViewModel

interface PostViewModelRepository {

    suspend fun getMostRecentPosts(): List<PostItemViewModel>
}