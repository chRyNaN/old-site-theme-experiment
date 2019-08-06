package com.chrynan.sitetheme.mapper

interface Mapper<M, VM> {

    fun map(model: M): VM
}