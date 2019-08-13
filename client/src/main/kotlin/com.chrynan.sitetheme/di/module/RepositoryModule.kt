package com.chrynan.sitetheme.di.module

import com.chrynan.locator.Module
import com.chrynan.sitetheme.repository.PostRepository

interface RepositoryModule : Module {

    val postRepository: PostRepository
}