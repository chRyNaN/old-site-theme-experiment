package com.chrynan.sitetheme

import com.chrynan.sitetheme.css.StyleCss
import com.chrynan.sitetheme.partials.header.HeaderPartial
import com.chrynan.sitetheme.templates.IndexTemplate
import com.chrynan.sitetheme.templates.NotFound
import com.chrynan.wordpress.PhpScriptTemplate
import com.chrynan.wordpress.Theme

object ChrynanCodesBuilderTheme : ChrynanCodesTheme(),
    Theme {

    override val location = super<ChrynanCodesTheme>.location

    override val templates = listOf(IndexTemplate, NotFound, HeaderPartial)

    override val phpScripts = emptyList<PhpScriptTemplate>()

    override val styles = listOf(StyleCss)
}