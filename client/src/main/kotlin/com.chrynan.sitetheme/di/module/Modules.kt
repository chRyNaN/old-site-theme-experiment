package com.chrynan.sitetheme.di.module

import com.chrynan.sitetheme.di.module.source.*
import com.chrynan.sitetheme.page.HomePage

val webModule: WebModule = WebModuleSource()

val repositoryModule: RepositoryModule = RepositoryModuleSource(webModule = webModule)

val navigatorModule: NavigatorModule = NavigatorModuleSource()

val applicationModule: ApplicationModule = ApplicationModuleSource(
    webModule = webModule,
    repositoryModule = repositoryModule,
    navigatorModule = navigatorModule
)

fun homePageModule(page: HomePage): HomePageModule = HomePageModuleSource(page = page)