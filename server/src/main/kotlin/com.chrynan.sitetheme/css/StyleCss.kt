package com.chrynan.sitetheme.css

import azadev.kotlin.css.Stylesheet
import com.chrynan.wordpress.DefaultCssFileNames
import com.chrynan.wordpress.DefaultLocations
import com.chrynan.wordpress.StyleTemplate

object StyleCss : StyleTemplate {

    override val location = DefaultLocations.ROOT

    override val name = DefaultCssFileNames.STYLE

    override fun style() = Stylesheet {
        include(FontCss.style())
    }
}