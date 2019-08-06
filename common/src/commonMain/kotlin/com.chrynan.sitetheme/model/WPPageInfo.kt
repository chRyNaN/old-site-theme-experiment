package com.chrynan.sitetheme.model

data class WPPageInfo(
    val endCursor: String? = null,
    val hasNextPage: Boolean,
    val hasPreviousPage: Boolean,
    val startCursor: String? = null
)