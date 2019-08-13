package com.chrynan.sitetheme.di.module

import com.chrynan.locator.Module
import com.chrynan.sitetheme.navigator.Navigator

interface NavigatorModule : Module {

    val navigator: Navigator
}