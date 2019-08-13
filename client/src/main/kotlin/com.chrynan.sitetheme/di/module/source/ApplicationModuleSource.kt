package com.chrynan.sitetheme.di.module.source

import com.chrynan.sitetheme.di.module.ApplicationModule
import com.chrynan.sitetheme.di.module.NavigatorModule
import com.chrynan.sitetheme.di.module.RepositoryModule
import com.chrynan.sitetheme.di.module.WebModule

class ApplicationModuleSource : ApplicationModule,
    WebModule by WebModuleSource(),
    RepositoryModule by RepositoryModuleSource(),
    NavigatorModule by NavigatorModuleSource()