package com.chrynan.sitetheme.model

data class Tag(
    override val id: ID,
    /**
     * The number of objects connected to the object
     */
    val count: Int? = null,
    /**
     * The description of the object
     */
    val description: String? = null,
    /**
     * The link to the term
     */
    val link: String? = null,
    /**
     * The human friendly name of the object.
     */
    val name: String? = null,
    /**
     * An alphanumeric identifier for the object unique to its type.
     */
    val slug: String? = null,
    /**
     * The id field matches the WP_Post-&gt;ID field.
     */
    val tagId: Int? = null,
    /**
     * The ID of the term group that this term object belongs to
     */
    val termGroupId: Int? = null
) : Node