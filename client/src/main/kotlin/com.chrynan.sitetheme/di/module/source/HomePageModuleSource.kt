package com.chrynan.sitetheme.di.module.source

import com.chrynan.locator.dependencyGraph
import com.chrynan.sitetheme.binder.HomeBinder
import com.chrynan.sitetheme.di.module.HomePageModule
import com.chrynan.sitetheme.di.module.RepositoryModule
import com.chrynan.sitetheme.page.HomePage
import com.chrynan.sitetheme.presenter.HomePresenter
import com.chrynan.sitetheme.repository.source.FooterItemRepositorySource
import com.chrynan.sitetheme.repository.source.MainNavigationItemRepositorySource
import com.chrynan.sitetheme.repository.source.PostViewModelRepositorySource
import com.chrynan.sitetheme.view.HomeView

class HomePageModuleSource(page: HomePage) : HomePageModule,
    RepositoryModule by dependencyGraph() {

    override val view: HomeView = page

    override val binder: HomeBinder = page

    override val presenter by lazy {
        HomePresenter(
            view,
            binder,
            PostViewModelRepositorySource(),
            postRepository,
            MainNavigationItemRepositorySource(),
            FooterItemRepositorySource()
        )
    }
}