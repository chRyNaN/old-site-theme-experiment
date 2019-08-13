package com.chrynan.sitetheme.di.module.source

import com.chrynan.sitetheme.di.module.RepositoryModule
import com.chrynan.sitetheme.di.module.WebModule
import com.chrynan.sitetheme.source.PostRepositorySource

class RepositoryModuleSource(webModule: WebModule) : RepositoryModule,
    WebModule by webModule {

    override val postRepository by lazy { PostRepositorySource(httpClient) }
}