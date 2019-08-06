package com.chrynan.sitetheme.binder

import com.chrynan.sitetheme.viewmodel.PostItemViewModel

interface HomeBinder : HeaderFooterBinder {

    fun bindPosts(models: List<PostItemViewModel>)
}