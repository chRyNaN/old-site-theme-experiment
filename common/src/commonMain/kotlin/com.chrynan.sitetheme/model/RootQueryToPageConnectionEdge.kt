package com.chrynan.sitetheme.model

data class RootQueryToPageConnectionEdge(
    override val cursor: String? = null,
    override val node: Page
) : Edge<Page>