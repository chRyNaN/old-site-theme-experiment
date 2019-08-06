package com.chrynan.sitetheme.model

data class Menu(
    /**
     * ID of the nav menu.
     */
    override val id: ID,
    /**
     * The number of items in the menu
     */
    val count: Int? = null,
    /**
     * WP ID of the nav menu.
     */
    val menuId: Int? = null,
    /**
     * Display name of the menu. Equivalent to WP_Term-&gt;name.
     */
    val name: String? = null,
    /**
     * The url friendly name of the menu. Equivalent to WP_Term-&gt;slug
     */
    val slug: String? = null
) : Node