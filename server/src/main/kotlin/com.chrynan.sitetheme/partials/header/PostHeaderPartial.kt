package com.chrynan.sitetheme.partials.header

import com.chrynan.wordpress.PartialHtmlTemplate
import com.chrynan.wordpress.php
import com.chrynan.wordpress.phpIf
import kotlinx.html.TagConsumer
import kotlinx.html.header

object PostHeaderPartial : PartialHtmlTemplate {

    override fun <T> TagConsumer<T>.layout() = header(classes = "post-header") {
        php { +"${'$'}discussion = ! is_page() && twentynineteen_can_show_post_thumbnail() ? twentynineteen_get_discussion_data() : null;" }

        php { +"the_title( '<h1 class=\"entry-title\">', '</h1>' );" }

        phpIf("! is_page()") {
            include(PostHeaderMetaPartial)
        }
    }
}