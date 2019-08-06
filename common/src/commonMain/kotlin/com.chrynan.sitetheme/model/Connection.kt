package com.chrynan.sitetheme.model

interface Connection<N : Node, E : Edge<N>> {

    val edges: List<E>

    val nodes: List<N>

    val pageInfo: WPPageInfo?
}