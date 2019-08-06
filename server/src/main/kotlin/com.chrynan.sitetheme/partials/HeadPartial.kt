package com.chrynan.sitetheme.partials

import com.chrynan.wordpress.PartialHtmlTemplate
import com.chrynan.wordpress.php
import com.chrynan.wordpress.phpString
import kotlinx.html.TagConsumer
import kotlinx.html.head
import kotlinx.html.link
import kotlinx.html.meta

object HeadPartial : PartialHtmlTemplate {

    override fun <T> TagConsumer<T>.layout() = head {
        // Material Icons
        link(rel = "stylesheet", href = "https://fonts.googleapis.com/icon?family=Material+Icons")
        // Material CSS
        link(rel = "stylesheet", href = "https://code.getmdl.io/1.3.0/material.indigo-pink.min.css")
        // Material Javascript
        link(type = "script/javascript", href = "https://code.getmdl.io/1.3.0/material.min.js")

        meta("charset") { php { +"bloginfo( 'charset' );" } }

        meta("viewport") { content = "width=device-width, initial-scale=1.0" }

        // Open Graph Tags
        meta("og:title") {
            content = phpString {
                +"open_graph_title()"
            }
        }
        meta("og:description") {
            content = phpString {
                +"open_graph_description()"
            }
        }
        meta("og:type") {
            content = phpString {
                +"open_graph_type()"
            }
        }
        meta("og:url") {
            content = phpString {
                +"open_graph_url()"
            }
        }
        meta("og:site_name") {
            content = phpString {
                +"open_graph_site_name()"
            }
        }
        meta("og:image") {
            content = phpString {
                +"open_graph_image()"
            }
        }
        meta("og:audio") {
            content = phpString {
                +"open_graph_audio()"
            }
        }
        meta("og:video") {
            content = phpString {
                +"open_graph_video()"
            }
        }
        meta("og:determiner") {
            content = phpString {
                +"open_graph_determiner"
            }
        }
        meta("og:locale") {
            content = phpString {
                +"open_graph_locale()"
            }
        }
    }
}