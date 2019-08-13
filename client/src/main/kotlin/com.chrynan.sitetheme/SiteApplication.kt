package com.chrynan.sitetheme

import com.chrynan.locator.LocatesWith
import com.chrynan.locator.attachToDependencyGraph
import com.chrynan.sitetheme.di.module.ApplicationModule
import com.chrynan.sitetheme.di.module.source.ApplicationModuleSource
import com.chrynan.sitetheme.page.HomePage
import com.chrynan.sitetheme.utils.appendPage
import kotlin.browser.document

class SiteApplication : Application,
    LocatesWith<ApplicationModule> {

    override val module = ApplicationModuleSource()

    override fun onStart() {
        attachToDependencyGraph()

        val page = HomePage()

        document.body?.appendPage(page)

        page.onLayoutCreated()
    }
}