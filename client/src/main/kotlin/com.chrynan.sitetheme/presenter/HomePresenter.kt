package com.chrynan.sitetheme.presenter

import com.chrynan.sitetheme.binder.HomeBinder
import com.chrynan.sitetheme.repository.FooterItemRepository
import com.chrynan.sitetheme.repository.MainNavigationItemRepository
import com.chrynan.sitetheme.repository.PostRepository
import com.chrynan.sitetheme.repository.PostViewModelRepository
import com.chrynan.sitetheme.view.HomeView
import kotlinx.coroutines.launch

class HomePresenter(
    private val view: HomeView,
    private val binder: HomeBinder,
    private val postViewModelRepository: PostViewModelRepository,
    private val postRepository: PostRepository,
    mainNavigationItemRepository: MainNavigationItemRepository,
    footerItemRepository: FooterItemRepository
) : HeaderFooterPresenter(
    view = view,
    binder = binder,
    mainNavigationItemRepository = mainNavigationItemRepository,
    footerItemRepository = footerItemRepository
) {

    fun loadPosts() {
        launch {
            view.showProgressBar()

            val postViewModelItems = postViewModelRepository.getMostRecentPosts()

            val postItems = postRepository.getPostListItemsAfter(first = 10, after = "After Cursor")

            binder.bindPosts(postViewModelItems)

            view.hideProgressBar()
        }
    }
}