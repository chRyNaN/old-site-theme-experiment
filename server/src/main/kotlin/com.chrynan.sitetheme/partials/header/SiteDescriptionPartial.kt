package com.chrynan.sitetheme.partials.header

import com.chrynan.wordpress.PartialHtmlTemplate
import com.chrynan.wordpress.php
import kotlinx.html.TagConsumer
import kotlinx.html.p

object SiteDescriptionPartial : PartialHtmlTemplate {

    override fun <T> TagConsumer<T>.layout() = p(classes = "site-description") {
        php { +"echo get_bloginfo( 'description', 'display' );" }
    }
}