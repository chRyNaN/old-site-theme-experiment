package com.chrynan.sitetheme.partials.header

import com.chrynan.wordpress.PartialHtmlTemplate
import com.chrynan.wordpress.php
import kotlinx.html.TagConsumer
import kotlinx.html.div

object LogoPartial : PartialHtmlTemplate {

    override fun <T> TagConsumer<T>.layout() = div(classes = "site-logo") {
        php { +"the_custom_logo();" }
    }
}