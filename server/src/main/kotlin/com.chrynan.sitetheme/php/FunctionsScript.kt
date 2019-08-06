package com.chrynan.sitetheme.php

import com.chrynan.wordpress.DefaultLocations
import com.chrynan.wordpress.DefaultTemplateNames
import com.chrynan.wordpress.PhpScriptFileTemplate

object FunctionsScript : PhpScriptFileTemplate {

    override val location = DefaultLocations.ROOT

    override val name = DefaultTemplateNames.FUNCTIONS

    override val inputFileLocation = FunctionsScript::class.java.`package`.name + "/functions.php"
}