package com.chrynan.sitetheme.model

enum class PostObjectFieldFormat {

    /**
     * Provide the field value directly from database
     */
    RAW,
    /**
     * Apply the default WordPress rendering
     */
    RENDERED
}