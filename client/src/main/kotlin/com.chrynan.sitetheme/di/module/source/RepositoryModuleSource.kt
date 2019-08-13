package com.chrynan.sitetheme.di.module.source

import com.chrynan.locator.dependencyGraph
import com.chrynan.sitetheme.di.module.RepositoryModule
import com.chrynan.sitetheme.di.module.WebModule
import com.chrynan.sitetheme.source.PostRepositorySource

class RepositoryModuleSource : RepositoryModule,
    WebModule by dependencyGraph() {

    override val postRepository by lazy { PostRepositorySource(httpClient) }
}