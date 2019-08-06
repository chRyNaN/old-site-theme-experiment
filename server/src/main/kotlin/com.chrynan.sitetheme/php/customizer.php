<?php
/**
 * Twenty Nineteen: Customizer
 *
 * @package WordPress
 * @subpackage Twenty_Nineteen
 * @since 1.0.0
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function theme_customize_register( $wp_customize ) {
    $wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
    $wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
    $wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

    if ( isset( $wp_customize->selective_refresh ) ) {
        $wp_customize->selective_refresh->add_partial(
            'blogname',
            array(
                'selector'        => '.site-title a',
                'render_callback' => 'customize_partial_blogname',
            )
        );
        $wp_customize->selective_refresh->add_partial(
            'blogdescription',
            array(
                'selector'        => '.site-description',
                'render_callback' => 'customize_partial_blogdescription',
            )
        );
    }

    // Page Dimensions
    setup_page_dimensions( $wp_customize );

    // Input Dimensions
    setup_input_dimensions( $wp_customize );

    // Button Dimensions
    setup_button_dimensions( $wp_customize );

    // Colors
    setup_colors( $wp_customize );
}
add_action( 'customize_register', 'theme_customize_register' );

function setup_page_dimensions( $wp_customize ) {
    $wp_customize->add_section( 'page_dimensions', array(
            'title' => __( 'Page Dimensions', theme ),
            'priority' => 20
        )
    );

    add_dimension_control(
        $wp_customize, // Wordpress Theme Customize Object
        'page_dimensions', // Section
        'default_horizontal_section_padding',  // Dimension ID
        '80', // Default Value
        'Default Horizontal Section Padding', // Label
        '' // Description
    );

    add_dimension_control(
        $wp_customize, // Wordpress Theme Customize Object
        'page_dimensions', // Section
        'default_vertical_section_padding',  // Dimension ID
        '80', // Default Value
        'Default Vertical Section Padding', // Label
        '' // Description
    );
}

function setup_input_dimensions( $wp_customize ) {
    $wp_customize->add_section( 'input_dimensions', array(
            'title' => __( 'Input Dimensions', theme ),
            'description' => __( 'Size values for Input fields', theme ),
            'priority' => 25
        )
    );

    add_dimension_control(
        $wp_customize, // Wordpress Theme Customize Object
        'input_dimensions', // Section
        'minimum_input_width',  // Dimension ID
        '100', // Default Value
        'Minimum Input Width', // Label
        '' // Description
    );

    add_dimension_control(
        $wp_customize, // Wordpress Theme Customize Object
        'input_dimensions', // Section
        'minimum_input_height',  // Dimension ID
        '50', // Default Value
        'Minimum Input Height', // Label
        '' // Description
    );

    add_dimension_control(
        $wp_customize, // Wordpress Theme Customize Object
        'input_dimensions', // Section
        'input_corner_radius',  // Dimension ID
        '50', // Default Value
        'Input Corner Radius', // Label
        '' // Description
    );

    add_dimension_control(
        $wp_customize, // Wordpress Theme Customize Object
        'input_dimensions', // Section
        'input_elevation',  // Dimension ID
        '8', // Default Value
        'Input Elevation', // Label
        '' // Description
    );
}

function setup_button_dimensions( $wp_customize ) {
    $wp_customize->add_section( 'button_dimensions', array(
            'title'    => __( 'Button Dimensions', theme ),
            'priority' => 30
        )
    );

    add_dimension_control(
        $wp_customize, // Wordpress Theme Customize Object
        'button_dimensions', // Section
        'minimum_button_width',  // Dimension ID
        '100', // Default Value
        'Minimum Button Width', // Label
        '' // Description
    );

    add_dimension_control(
        $wp_customize, // Wordpress Theme Customize Object
        'button_dimensions', // Section
        'minimum_button_height',  // Dimension ID
        '50', // Default Value
        'Minimum Button Height', // Label
        '' // Description
    );

    add_dimension_control(
        $wp_customize, // Wordpress Theme Customize Object
        'button_dimensions', // Section
        'button_corner_radius',  // Dimension ID
        '50', // Default Value
        'Button Corner Radius', // Label
        '' // Description
    );

    add_dimension_control(
        $wp_customize, // Wordpress Theme Customize Object
        'button_dimensions', // Section
        'button_default_elevation',  // Dimension ID
        '8', // Default Value
        'Default Button Elevation', // Label
        '' // Description
    );

    add_dimension_control(
        $wp_customize, // Wordpress Theme Customize Object
        'button_dimensions', // Section
        'button_focused_elevation',  // Dimension ID
        '16', // Default Value
        'Focused Button Elevation', // Label
        '' // Description
    );

    add_css_input_control(
        $wp_customize, // Wordpress Theme Customize Object
        'button_dimensions', // Section
        'button_focus_transform',  // ID
        'scale(2, 2)', // Default Value
        'Focused Button Transform', // Label
        'CSS transform style value for focused button state', // Description
        'scale(2, 2)' // Placeholder
    );
}

function add_css_input_control( $wp_customize, $section, $id, $default, $label, $description, $placeholder) {
    $wp_customize->add_setting( "{$id}_value", array(
            'type' => 'input',
            'transport' => 'postMessage',
            'default' => $default
        )
    );

    $wp_customize->add_control( "{$id}_value", array(
            'type' => 'text',
            'section' => $section,
            'label' => __( $label ),
            'description' => __( $description ),
            'input_attrs' => array(
                'placeholder' => __( $placeholder )
            )
        )
    );
}

function add_dimension_control( $wp_customize, $section, $dimension_id, $default, $label, $description ) {
    $wp_customize->add_setting( "{$dimension_id}_value", array(
            'type' => 'input',
            'transport' => 'postMessage',
            'default' => $default
        )
    );

    $wp_customize->add_control( "{$dimension_id}_value", array(
            'type' => 'text',
            'section' => $section,
            'label' => __( "{$label} Value" ),
            'description' => __( $description ),
            'input_attrs' => array(
                'placeholder' => __( 'Dimension Value' )
            )
        )
    );

    $wp_customize->add_setting( "{$dimension_id}_unit", array(
            'capability' => 'edit_theme_options',
            'transport'         => 'postMessage',
            'default' => 'px',
            'sanitize_callback' => 'sanitize_radio_select',
        )
    );

    $wp_customize->add_control( "{$dimension_id}_unit", array(
            'type' => 'radio',
            'section' => $section,
            'label' => __( "{$label} Unit" ),
            'description' => __( 'CSS Dimension Unit' ),
            'choices' => array(
                'px' => __( 'px' ),
                'pt' => __( 'pt' ),
                'pc' => __( 'pc' ),
                'cm' => __( 'cm' ),
                'mm' => __( 'mm' ),
                'in' => __( 'in' ),
                'em' => __( 'em' ),
                'ex' => __( 'ex' ),
                'ch' => __( 'ch' ),
                'rem' => __( 'rem' ),
                'vw' => __( 'vw' ),
                'vh' => __( 'vh' ),
                'vmin' => __( 'vmin' ),
                'vmax' => __( 'vmax' ),
                '%' => __( '%' )
            ),
        )
    );
}

function sanitize_radio_select( $input, $setting ) {

    // Ensure input is a slug.
    $input = sanitize_key( $input );

    // Get list of choices from the control associated with the setting.
    $choices = $setting->manager->get_control( $setting->id )->choices;

    // If the input is a valid key, return it; otherwise, return the default.
    return ( array_key_exists( $input, $choices ) ? $input : $setting->default );
}

function setup_colors( $wp_customize ) {
    /*
     * Primary Color
     */
    add_color_control(
        $wp_customize, // Wordpress Theme Customize Object
        'primary',  // Color ID
        '#474E5D', // Default Value
        'Primary', // Label
        'Description' // Description
    );

    /*
     * Primary Dark Color
     */
    add_color_control(
        $wp_customize, // Wordpress Theme Customize Object
        'primary_dark',  // Color ID
        '#313640', // Default Value
        'Primary Dark', // Label
        'Description' // Description
    );

    /*
     * Accent One Color
     */
    add_color_control(
        $wp_customize, // Wordpress Theme Customize Object
        'accent_one',  // Color ID
        '#40B0F9', // Default Value
        'Accent One', // Label
        'Description' // Description
    );

    /*
     * Accent One Focused Color
     */
    add_color_control(
        $wp_customize, // Wordpress Theme Customize Object
        'accent_one_focused',  // Color ID
        '#3e9ef2', // Default Value
        'Accent One Focused', // Label
        'Description' // Description
    );

    /*
     * Accent Two Color
     */
    add_color_control(
        $wp_customize, // Wordpress Theme Customize Object
        'accent_two',  // Color ID
        '#FF9421', // Default Value
        'Accent Two', // Label
        'Description' // Description
    );

    /*
     * Accent Two Focused Color
     */
    add_color_control(
        $wp_customize, // Wordpress Theme Customize Object
        'accent_two_focused',  // Color ID
        '#F37B20', // Default Value
        'Accent Two Focused', // Label
        'Description' // Description
    );

    /*
     * Accent Three Color
     */
    add_color_control(
        $wp_customize, // Wordpress Theme Customize Object
        'accent_three',  // Color ID
        '#41AF3D', // Default Value
        'Accent Three', // Label
        'Description' // Description
    );

    /*
     * Accent Three Focused Color
     */
    add_color_control(
        $wp_customize, // Wordpress Theme Customize Object
        'accent_three_focused',  // Color ID
        '#38a049', // Default Value
        'Accent Three Focused', // Label
        'Description' // Description
    );

    /*
     * Background Color
     */
    add_color_control(
        $wp_customize, // Wordpress Theme Customize Object
        'background',  // Color ID
        '#FFFFFF', // Default Value
        'Background', // Label
        'Description' // Description
    );

    /*
     * Background Accent Light Color
     */
    add_color_control(
        $wp_customize, // Wordpress Theme Customize Object
        'background_accent_light',  // Color ID
        '#F7F7F3', // Default Value
        'Background Accent Light', // Label
        'Description' // Description
    );

    /*
     * Background Accent Dark Color
     */
    add_color_control(
        $wp_customize, // Wordpress Theme Customize Object
        'background_accent_dark',  // Color ID
        '#E9E9E9', // Default Value
        'Background Accent Dark', // Label
        'Description' // Description
    );

    /*
     * Text Light Color
     */
    add_color_control(
        $wp_customize, // Wordpress Theme Customize Object
        'text_light',  // Color ID
        '#FFFFFF', // Default Value
        'Text Light', // Label
        'Description' // Description
    );

    /*
     * Text Dark Color
     */
    add_color_control(
        $wp_customize, // Wordpress Theme Customize Object
        'text_dark',  // Color ID
        '#313640', // Default Value
        'Text Dark', // Label
        'Description' // Description
    );
}

function add_color_control( $wp_customize, $color_id, $default, $label, $description ){
    $wp_customize->add_setting(
        "{$color_id}_color",
        array(
            'label'             => $label,
            'default'           => $default,
            'transport'         => 'postMessage',
            'sanitize_callback' => 'sanitize_hex_color'
        )
    );

    $wp_customize->add_control(
        new WP_Customize_Color_Control(
            $wp_customize,
            "{$color_id}_color",
            array(
                'label'       => $label,
                'description' => __( $description, theme ),
                'section'     => 'colors',
            )
        )
    );
}

/**
 * Render the site title for the selective refresh partial.
 *
 * @return void
 */
function customize_partial_blogname() {
    bloginfo( 'name' );
}

/**
 * Render the site tagline for the selective refresh partial.
 *
 * @return void
 */
function customize_partial_blogdescription() {
    bloginfo( 'description' );
}

/**
 * Bind JS handlers to instantly live-preview changes.
 */
function twentynineteen_customize_preview_js() {
    wp_enqueue_script( 'twentynineteen-customize-preview', get_theme_file_uri( '/js/customize-preview.js' ), array( 'customize-preview' ), '20181231', true );
}
add_action( 'customize_preview_init', 'twentynineteen_customize_preview_js' );

/**
 * Load dynamic logic for the customizer controls area.
 */
function twentynineteen_panels_js() {
    wp_enqueue_script( 'twentynineteen-customize-controls', get_theme_file_uri( '/js/customize-controls.js' ), array(), '20181231', true );
}
add_action( 'customize_controls_enqueue_scripts', 'twentynineteen_panels_js' );

/**
 * Sanitize custom color choice.
 *
 * @param string $choice Whether image filter is active.
 *
 * @return string
 */
function twentynineteen_sanitize_color_option( $choice ) {
    $valid = array(
        'default',
        'custom',
    );

    if ( in_array( $choice, $valid, true ) ) {
        return $choice;
    }

    return 'default';
}
