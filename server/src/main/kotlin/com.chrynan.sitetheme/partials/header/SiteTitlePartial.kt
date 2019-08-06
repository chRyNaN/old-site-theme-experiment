package com.chrynan.sitetheme.partials.header

import com.chrynan.wordpress.PartialHtmlTemplate
import com.chrynan.wordpress.php
import kotlinx.html.TagConsumer
import kotlinx.html.classes
import kotlinx.html.h1

object SiteTitlePartial : PartialHtmlTemplate {

    override fun <T> TagConsumer<T>.layout() = h1 {
        classes = setOf("site-title", "mdl-navigation__link", "mdl-layout-title")
        php {
            +"""
                ${'$'}blog_info = get_bloginfo( 'name' );
                bloginfo( 'name' );
            """
        }
    }
}