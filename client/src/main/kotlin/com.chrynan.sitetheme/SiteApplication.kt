package com.chrynan.sitetheme

import com.chrynan.locator.LocatesWith
import com.chrynan.locator.attachToDependencyGraph
import com.chrynan.locator.locate
import com.chrynan.sitetheme.di.module.*
import com.chrynan.sitetheme.page.HomePage
import com.chrynan.sitetheme.page.Page

class SiteApplication(private val startingPageRetriever: () -> Page = { HomePage() }) : Application,
    LocatesWith<ApplicationModule> {

    override val module = applicationModule

    private val navigator by locate { navigator }

    override fun onStart() {
        attachToDependencyGraph<WebModule>(module)
        attachToDependencyGraph<RepositoryModule>(module)
        attachToDependencyGraph<NavigatorModule>(module)
        attachToDependencyGraph()

        navigator.goTo(startingPageRetriever())
    }
}