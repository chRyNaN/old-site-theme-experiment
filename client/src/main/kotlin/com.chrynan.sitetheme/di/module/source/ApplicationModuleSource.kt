package com.chrynan.sitetheme.di.module.source

import com.chrynan.sitetheme.di.module.ApplicationModule
import com.chrynan.sitetheme.di.module.NavigatorModule
import com.chrynan.sitetheme.di.module.RepositoryModule
import com.chrynan.sitetheme.di.module.WebModule

class ApplicationModuleSource(
    webModule: WebModule,
    repositoryModule: RepositoryModule,
    navigatorModule: NavigatorModule
) : ApplicationModule,
    WebModule by webModule,
    RepositoryModule by repositoryModule,
    NavigatorModule by navigatorModule