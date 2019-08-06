package com.chrynan.sitetheme.templates

import kotlinx.html.TagConsumer

interface Template<VM> {

    fun <T> TagConsumer<T>.layout(viewModel: VM): T
}