package com.chrynan.sitetheme.model

interface Edge<T> {

    val cursor: Cursor

    val node: T
}