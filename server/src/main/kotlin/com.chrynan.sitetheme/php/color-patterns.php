<?php
/**
 * Twenty Nineteen: Color Patterns
 *
 * @package WordPress
 * @subpackage TwentyNineteen
 * @since 1.0
 */

/**
 * Generate the CSS for the current primary color.
 */
function custom_colors_css() {

    $primary_color = get_theme_mod( 'primary_color', '#474E5D' );
    $primary_dark_color = get_theme_mod( 'primary_dark_color', '#313640' );
    $accent_one_color = get_theme_mod( 'accent_one_color', '#40B0F9' );
    $accent_one_focused_color = get_theme_mod( 'accent_one_focused_color', '#3e9ef2' );
    $accent_two_color = get_theme_mod( 'accent_two_color', '#FF9421' );
    $accent_two_focused_color = get_theme_mod( 'accent_two_focused_color', '#F37B20' );
    $accent_three_color = get_theme_mod( 'accent_three_color', '#41AF3D' );
    $accent_three_focused_color = get_theme_mod( 'accent_three_focused_color', '#38a049' );
    $background_color = get_theme_mod( 'background_color', '#FFFFFF' );
    $background_accent_light_color = get_theme_mod( 'background_accent_light_color', '#F7F7F3' );
    $background_accent_dark_color = get_theme_mod( 'background_accent_dark_color', '#E9E9E9' );
    $text_light_color = get_theme_mod( 'text_light_color', '#FFFFFF' );
    $text_dark_color = get_theme_mod( 'text_dark_color', '#313640' );

    $theme_css = '
		body {
			color: ' . $text_dark_color . ';
			background-color: ' . $background_color . ';
		}
		
		.site-header {
			background-color: ' . $primary_dark_color . ' !important;
			color: ' . $text_light_color . ' !important;
		}
		
		.site-title {
			color: ' . $text_light_color . ' !important;
		}
		
		.main-navigation .main-menu > li,
		.main-navigation ul.main-menu > li > a,
		.main-navigation .main-menu > li > a + svg {
			color: ' . $text_light_color . ' !important;
		}
		
		.submenu,
		.sub-menu,
		.submenu-expand,
		.sub-menu-expand,
		.submenu-expand:hover,
		.sub-menu-expand:hover,
		.submenu-expand:focus,
		.sub-menu-expand:focus {
			background-color: ' . $primary_color . ' !important;
			color: ' . $text_light_color . ' !important;
		}
	
		/*
		 * Set background for:
		 * - featured image :before
		 * - featured image :before
		 * - post thumbmail :before
		 * - post thumbmail :before
		 * - Submenu
		 * - Sticky Post
		 * - buttons
		 * - WP Block Button
		 * - Blocks
		 */
		.image-filters-enabled .site-header.featured-image .site-featured-image:before,
		.image-filters-enabled .site-header.featured-image .site-featured-image:after,
		.image-filters-enabled .entry .post-thumbnail:before,
		.image-filters-enabled .entry .post-thumbnail:after,
		.main-navigation .sub-menu,
		.sticky-post,
		.entry .entry-content .wp-block-button .wp-block-button__link:not(.has-background),
		.entry .button, button, input[type="button"], input[type="reset"], input[type="submit"],
		.entry .entry-content > .has-primary-background-color,
		.entry .entry-content > *[class^="wp-block-"].has-primary-background-color,
		.entry .entry-content > *[class^="wp-block-"] .has-primary-background-color,
		.entry .entry-content > *[class^="wp-block-"].is-style-solid-color,
		.entry .entry-content > *[class^="wp-block-"].is-style-solid-color.has-primary-background-color,
		.entry .entry-content .wp-block-file .wp-block-file__button {
			background-color: ' . $background_accent_light_color . ';
		}

		/*
		 * Set Color for:
		 * - all links
		 * - main navigation links
		 * - Post navigation links
		 * - Post entry meta hover
		 * - Post entry header more-link hover
		 * - main navigation svg
		 * - comment navigation
		 * - Comment edit link hover
		 * - Site Footer Link hover
		 * - Widget links
		 */
		a,
		a:visited,
		.widget a,
		.post-navigation .post-title,
		.entry .entry-content .wp-block-button.is-style-outline .wp-block-button__link:not(.has-text-color),
		.entry .entry-content > .has-primary-color,
		.entry .entry-content > *[class^="wp-block-"] .has-primary-color,
		.entry .entry-content > *[class^="wp-block-"].is-style-solid-color blockquote.has-primary-color,
		.entry .entry-content > *[class^="wp-block-"].is-style-solid-color blockquote.has-primary-color p {
			color: ' . $accent_one_color . ';
		}
		
		a:hover,
		a:focus,
		.entry .entry-meta a:hover,
		.entry .entry-meta a:focus,
		.entry .entry-footer a:hover,
		.entry .entry-footer a:focus,
		.entry .entry-content .more-link:hover,
		.entry .entry-content .more-link:focus,
		.comment .comment-metadata > a:hover,
		.comment .comment-metadata > a:focus,
		#colophon .site-info a:hover,
		#colophon .site-info a:focus {
			color: ' . $accent_three_color . ';
		}

		/*
		 * Set left border color for:
		 * wp block quote
		 */
		blockquote,
		.entry .entry-content blockquote,
		.entry .entry-content .wp-block-quote:not(.is-large),
		.entry .entry-content .wp-block-quote:not(.is-style-large) {
			border-left-color: ' . $primary_color . ';
		}
		
		blockquote,
		.blockquote,
		.entry .entry-content blockquote,
		.entry .entry-content .wp-block-quote,
		.wp-block-quote {
			background-color: ' . $background_accent_dark_color . ';
		}

		/*
		 * Set border color for:
		 * :focus
		 */
		input[type="text"]:focus,
		input[type="email"]:focus,
		input[type="url"]:focus,
		input[type="password"]:focus,
		input[type="search"]:focus,
		input[type="number"]:focus,
		input[type="tel"]:focus,
		input[type="range"]:focus,
		input[type="date"]:focus,
		input[type="month"]:focus,
		input[type="week"]:focus,
		input[type="time"]:focus,
		input[type="datetime"]:focus,
		input[type="datetime-local"]:focus,
		input[type="color"]:focus,
		textarea:focus {
			border-color: ' . $accent_one_color . ';
		}
		
		input,
		textarea {
			background-color: ' . $background_color . ';
		}
		
		button,
		.button,
		.btn,
		input[type="submit"],
		input[type="reset"],
		input[type="button"] {
			background-color: ' . $accent_two_color . ' !important;
			color: ' . $text_light_color . ' !important;
		}
		
		button:hover,
		button:focus,
		.button:hover,
		.button:focus,
		.btn:hover,
		.btn:focus,
		input[type="submit"]:hover,
		input[type="submit"]:focus,
		input[type="reset"]:hover,
		input[type="reset"]:focus,
		input[type="button"]:hover,
		input[type="button"]:focus {
			background-color: ' . $accent_two_focused_color . ' !important;
			color: ' . $text_light_color . ' !important;
		}

		.gallery-item > div > a:focus {
			box-shadow: 0 0 0 2px ' . $primary_color . ';
		}

		/* Hover colors */
		a:hover, a:active,
		.main-navigation .main-menu > li > a:hover,
		.main-navigation .main-menu > li > a:hover + svg,
		.post-navigation .nav-links a:hover,
		.post-navigation .nav-links a:hover .post-title,
		.author-bio .author-description .author-link:hover,
		.entry .entry-content > .has-secondary-color,
		.entry .entry-content > *[class^="wp-block-"] .has-secondary-color,
		.entry .entry-content > *[class^="wp-block-"].is-style-solid-color blockquote.has-secondary-color,
		.entry .entry-content > *[class^="wp-block-"].is-style-solid-color blockquote.has-secondary-color p,
		.comment .comment-author .fn a:hover,
		.comment-reply-link:hover,
		.comment-navigation .nav-previous a:hover,
		.comment-navigation .nav-next a:hover,
		#cancel-comment-reply-link:hover,
		.widget a:hover {
			color: ' . $accent_three_color . ';
		}

		.main-navigation .sub-menu > li > a:hover,
		.main-navigation .sub-menu > li > a:focus,
		.main-navigation .sub-menu > li > a:hover:after,
		.main-navigation .sub-menu > li > a:focus:after,
		.main-navigation .sub-menu > li > .menu-item-link-return:hover,
		.main-navigation .sub-menu > li > .menu-item-link-return:focus,
		.main-navigation .sub-menu > li > a:not(.submenu-expand):hover,
		.main-navigation .sub-menu > li > a:not(.submenu-expand):focus,
		.entry .entry-content > .has-secondary-background-color,
		.entry .entry-content > *[class^="wp-block-"].has-secondary-background-color,
		.entry .entry-content > *[class^="wp-block-"] .has-secondary-background-color,
		.entry .entry-content > *[class^="wp-block-"].is-style-solid-color.has-secondary-background-color {
			background-color: ' . $accent_three_color . ';
		}
		
		.bottom-navbar,
		.site-info {
			background-color: ' . $primary_dark_color . ' !important;
			color: ' . $text_light_color . ' !important;
		}
		
		.site-info > a {
			color: ' . $text_light_color . ' !important;
		}
		
		.site-info > a:focus,
		.site-info > a:hover {
			color: ' . $accent_one_color . ' !important;
		}

		/* Text selection colors */
		::selection {
			background-color: ' . $accent_one_color . ';
		}
		::-moz-selection {
			background-color: ' . $accent_one_color . ';
		}';

    $editor_css = '
		/*
		 * Set colors for:
		 * - links
		 * - blockquote
		 * - pullquote (solid color)
		 * - buttons
		 */
		.editor-block-list__layout .editor-block-list__block a,
		.editor-block-list__layout .editor-block-list__block .wp-block-button.is-style-outline .wp-block-button__link:not(.has-text-color),
		.editor-block-list__layout .editor-block-list__block .wp-block-button.is-style-outline:hover .wp-block-button__link:not(.has-text-color),
		.editor-block-list__layout .editor-block-list__block .wp-block-button.is-style-outline:focus .wp-block-button__link:not(.has-text-color),
		.editor-block-list__layout .editor-block-list__block .wp-block-button.is-style-outline:active .wp-block-button__link:not(.has-text-color),
		.editor-block-list__layout .editor-block-list__block .wp-block-file .wp-block-file__textlink {
			color: ' . $primary_color . ';
		}

		.editor-block-list__layout .editor-block-list__block .wp-block-quote:not(.is-large):not(.is-style-large),
		.editor-styles-wrapper .editor-block-list__layout .wp-block-freeform blockquote {
			border-left: 2px solid ' . $primary_color . ';
		}

		.editor-block-list__layout .editor-block-list__block .wp-block-pullquote.is-style-solid-color:not(.has-background-color) {
			background-color: ' . $primary_color . ';
		}

		.editor-block-list__layout .editor-block-list__block .wp-block-file .wp-block-file__button,
		.editor-block-list__layout .editor-block-list__block .wp-block-button:not(.is-style-outline) .wp-block-button__link,
		.editor-block-list__layout .editor-block-list__block .wp-block-button:not(.is-style-outline) .wp-block-button__link:active,
		.editor-block-list__layout .editor-block-list__block .wp-block-button:not(.is-style-outline) .wp-block-button__link:focus,
		.editor-block-list__layout .editor-block-list__block .wp-block-button:not(.is-style-outline) .wp-block-button__link:hover {
			background-color: ' . $accent_one_color . ';
		}

		/* Hover colors */
		.editor-block-list__layout .editor-block-list__block a:hover,
		.editor-block-list__layout .editor-block-list__block a:active,
		.editor-block-list__layout .editor-block-list__block .wp-block-file .wp-block-file__textlink:hover {
			color: ' . $accent_one_color . ';
		}

		/* Do not overwrite solid color pullquote or cover links */
		.editor-block-list__layout .editor-block-list__block .wp-block-pullquote.is-style-solid-color a,
		.editor-block-list__layout .editor-block-list__block .wp-block-cover a {
			color: inherit;
		}
		';

    if ( function_exists( 'register_block_type' ) && is_admin() ) {
        $theme_css = $editor_css;
    }

    /**
     * Filters Twenty Nineteen custom colors CSS.
     *
     * @since Twenty Nineteen 1.0
     *
     * @param string $css           Base theme colors CSS.
     * @param int    $primary_color The user's selected color hue.
     * @param string $saturation    Filtered theme color saturation level.
     */
    return apply_filters( 'custom_colors_css', $theme_css, $primary_color, $saturation );
}
