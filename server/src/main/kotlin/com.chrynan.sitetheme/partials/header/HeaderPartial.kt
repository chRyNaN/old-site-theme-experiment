package com.chrynan.sitetheme.partials.header

import com.chrynan.wordpress.*
import kotlinx.html.*

object HeaderPartial : HtmlTemplate {

    override val location = DefaultLocations.PARTIALS

    override val name = DefaultPartialNames.HEADER

    override fun <T> TagConsumer<T>.layout() = header {
        classes = setOf(
            "topbar", "js-top", "is-sticky", "sticky-header", "site-header",
            "featured-image-container", "mdl-layout__header"
        )
        id = "masthead"

        div {
            classes = setOf("site-brainding-container", "topbar__container")

            div {
                classes = setOf("site-branding", "topbar__inner", "mdl-layout__header-row")
                a(href = phpString { +"echo esc_url( home_url( '/' ) );" }, classes = "logo site-logo-link") {
                    rel = "home"

                    phpIf("has_custom_logo()") { +LogoPartial }

                    php { +"${'$'}blog_info = get_bloginfo( 'name' );" }

                    phpIf("! empty( ${'$'}blog_info )") { +SiteTitlePartial }
                }

                php { +"${'$'}description = get_bloginfo( 'description', 'display' );" }

                phpIf("${'$'}description || is_customize_preview()") { +SiteDescriptionPartial }

                phpIf("has_nav_menu( 'menu-1')") { +SiteNavigationPartial }
            }
        }
    }
}