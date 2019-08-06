package com.chrynan.sitetheme.templates

import com.chrynan.wordpress.DefaultLocations
import com.chrynan.wordpress.DefaultTemplateNames
import com.chrynan.wordpress.HtmlTemplate
import com.chrynan.wordpress.php
import kotlinx.html.*

object NotFound : HtmlTemplate {

    override val location = DefaultLocations.ROOT

    override val name = DefaultTemplateNames.NOT_FOUND

    override fun <T> TagConsumer<T>.layout(): T =
        html {
            php { +"get_header();" }

            section(classes = "content-area") {
                id = "primary"

                main(classes = "site-main, mdl-layout__content") {
                    id = "main"

                    div(classes = "error-404 not-found") {
                        header(classes = "page-header") {
                            h1(classes = "page-title") {
                                php { +"_e( 'Oops! That page can&rsquo;t be found.', theme );" }
                            }
                        }

                        div(classes = "page-content") {
                            p {
                                php { +"_e( 'It looks like nothing was found at this location. Maybe try a search?', theme );" }
                                php { +"get_search_form();" }
                            }
                        }
                    }
                }
            }

            php { +"get_footer();" }
        }
}