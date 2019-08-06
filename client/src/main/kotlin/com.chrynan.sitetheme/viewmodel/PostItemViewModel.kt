package com.chrynan.sitetheme.viewmodel

class PostItemViewModel(
    val title: String,
    val subtitle: String? = null,
    val excerpt: String,
    val imageUrl: String? = null,
    val date: String,
    val author: String,
    val authorImageUrl: String,
    val link: String,
    val readMoreText: String
)