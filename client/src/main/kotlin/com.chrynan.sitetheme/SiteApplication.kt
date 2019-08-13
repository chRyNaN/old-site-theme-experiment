package com.chrynan.sitetheme

import com.chrynan.locator.LocatesWith
import com.chrynan.locator.attachToDependencyGraph
import com.chrynan.locator.locate
import com.chrynan.sitetheme.di.module.ApplicationModule
import com.chrynan.sitetheme.di.module.source.ApplicationModuleSource
import com.chrynan.sitetheme.page.HomePage
import com.chrynan.sitetheme.page.Page

class SiteApplication(private val startingPage: Page = HomePage()) : Application,
    LocatesWith<ApplicationModule> {

    override val module = ApplicationModuleSource()

    private val navigator by locate { navigator }

    override fun onStart() {
        attachToDependencyGraph()

        navigator.goTo(startingPage)
    }
}