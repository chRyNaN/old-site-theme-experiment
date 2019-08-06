package com.chrynan.sitetheme.partials.header

import com.chrynan.wordpress.PartialHtmlTemplate
import com.chrynan.wordpress.php
import kotlinx.html.TagConsumer
import kotlinx.html.classes
import kotlinx.html.id
import kotlinx.html.nav

object SiteNavigationPartial : PartialHtmlTemplate {

    override fun <T> TagConsumer<T>.layout() = nav {
        classes = setOf("main-navigation", "navbar", "js-navbar", "mdl-navigation")
        id = "site-navigation"

        php {
            +"""
                wp_nav_menu(
                    array(
                        'theme_location' => 'menu-1',
                        'menu_class'     => 'main-menu',
                        'items_wrap'     => '<ul id="%1${'$'}s" class="%2${'$'}s navbar__menu navbar-menu mdl-menu mdl-navigation">%3${'$'}s</ul>',
                    )
                );
            """
        }
    }
}