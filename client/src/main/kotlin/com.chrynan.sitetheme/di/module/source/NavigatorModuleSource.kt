package com.chrynan.sitetheme.di.module.source

import com.chrynan.sitetheme.di.module.NavigatorModule
import com.chrynan.sitetheme.navigator.NavigatorSource

class NavigatorModuleSource : NavigatorModule {

    override val navigator = NavigatorSource()
}