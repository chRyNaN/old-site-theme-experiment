package com.chrynan.sitetheme.templates

import com.chrynan.wordpress.DefaultLocations
import com.chrynan.wordpress.DefaultTemplateNames
import com.chrynan.wordpress.HtmlTemplate
import kotlinx.html.*

object IndexTemplate : HtmlTemplate {

    override val location = DefaultLocations.ROOT

    override val name = DefaultTemplateNames.INDEX

    override fun <T> TagConsumer<T>.layout() = html {
        head {

        }

        body {
            div {

            }
        }
    }
}