package com.chrynan.sitetheme.mapper

import com.chrynan.sitetheme.model.Post
import com.chrynan.sitetheme.viewmodel.PostItemViewModel

class PostItemMapper : Mapper<Post, PostItemViewModel> {

    override fun map(model: Post) =
        PostItemViewModel(
            title = model.title ?: "",
            subtitle = null,
            excerpt = model.excerpt ?: model.content?.substring(0, 250) ?: "",
            imageUrl = model.featuredImage,
            date = model.date ?: "",
            author = model.author?.nicename ?: "",
            authorImageUrl = model.author?.avatar?.url ?: "",
            link = model.link ?: "",
            readMoreText = "Read More"
        )
}