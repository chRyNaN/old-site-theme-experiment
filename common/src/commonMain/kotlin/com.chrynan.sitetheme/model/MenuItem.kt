package com.chrynan.sitetheme.model

data class MenuItem(
    override val id: ID,
    /**
     * Class attribute for the menu item link
     */
    val cssClasses: List<String> = emptyList(),
    /**
     * Description of the menu item.
     */
    val description: String? = null,
    /**
     * Label or title of the menu item.
     */
    val label: String? = null,
    /**
     * Label or title of the menu item.
     */
    val linkRelationship: String? = null,
    /**
     * WP ID of the menu item.
     */
    val menuItemId: Int? = null,
    /**
     * Target attribute for the menu item link.
     */
    val target: String? = null,
    /**
     * Title attribute for the menu item link
     */
    val title: String? = null,
    /**
     * URL or destination of the menu item.
     */
    val url: String? = null
) : Node