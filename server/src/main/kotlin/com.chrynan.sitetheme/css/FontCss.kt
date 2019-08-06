package com.chrynan.sitetheme.css

import azadev.kotlin.css.Stylesheet
import azadev.kotlin.css.fontFamily
import com.chrynan.wordpress.StyleTemplate

object FontCss : StyleTemplate {

    override val location: String
        get() = TODO("not implemented") //To change initializer of created properties use File | Settings | File Templates.

    override val name: String
        get() = TODO("not implemented") //To change initializer of created properties use File | Settings | File Templates.

    override fun style() = Stylesheet {
        body {
            fontFamily = ""
        }
    }
}