package com.chrynan.sitetheme.page

import kotlinx.html.TagConsumer

abstract class Page {

    abstract fun <T> TagConsumer<T>.onCreateLayout(): T

    open fun onLayoutCreated() {
    }

    open fun onLayoutDestroyed() {
    }
}