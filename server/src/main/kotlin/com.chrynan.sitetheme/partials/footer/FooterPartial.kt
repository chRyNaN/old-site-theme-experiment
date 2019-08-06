package com.chrynan.sitetheme.partials.footer

import com.chrynan.wordpress.*
import kotlinx.html.*

object FooterPartial : HtmlTemplate {

    override val location = DefaultLocations.ROOT

    override val name = DefaultPartialNames.FOOTER

    override fun <T> TagConsumer<T>.layout() = footer {
        classes = setOf("")
        id = "colophon"

        div {
            classes = setOf("site-info")

            a {
                classes = setOf("site-name", "site-info__name", "mdl-navigation__link")
                href = phpString { +"echo esc_url( home_url( '/' ) );" }
                rel = "home"
                +phpString { +"bloginfo( 'name' );" }
            }

            nav {
                classes = setOf("footer-navigation", "mdl-navigation")

                php {
                    +"""
                        wp_nav_menu(
						    array(
							    'theme_location' => 'footer',
							    'menu_class'     => 'footer-menu',
							    'depth'          => 1,
						    )
					    );
                    """.trimIndent()
                }
            }
        }
    }
}