package com.chrynan.sitetheme.di.module

import com.chrynan.locator.Module
import com.chrynan.sitetheme.binder.HomeBinder
import com.chrynan.sitetheme.presenter.HomePresenter
import com.chrynan.sitetheme.view.HomeView

interface HomePageModule : Module {

    val presenter: HomePresenter

    val view: HomeView

    val binder: HomeBinder
}