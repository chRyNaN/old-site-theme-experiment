package com.chrynan.sitetheme.model

interface Edge<N : Node> {

    val cursor: String?

    val node: N
}