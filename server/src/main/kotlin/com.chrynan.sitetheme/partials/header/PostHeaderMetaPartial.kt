package com.chrynan.sitetheme.partials.header

import com.chrynan.wordpress.PartialHtmlTemplate
import com.chrynan.wordpress.php
import com.chrynan.wordpress.phpIf
import kotlinx.html.TagConsumer
import kotlinx.html.div
import kotlinx.html.span

object PostHeaderMetaPartial : PartialHtmlTemplate {

    override fun <T> TagConsumer<T>.layout() = div(classes = "entry-meta") {
        php { +"twentynineteen_posted_by();" }
        php { +"twentynineteen_posted_on();" }

        php { +"${'$'}discussion = ! is_page() && twentynineteen_can_show_post_thumbnail() ? twentynineteen_get_discussion_data() : null;" }

        span(classes = "comment-count") {
            phpIf("! empty( ${'$'}discussion )") {
                +"twentynineteen_discussion_avatars_list( ${'$'}discussion->authors );"
            }
            php { +"twentynineteen_comment_count();" }
        }

        php {
            +"""
                // Edit post link.
		        edit_post_link(
			        sprintf(
				        wp_kses(
					        /* translators: %s: Name of current post. Only visible to screen readers. */
					        __( 'Edit <span class="screen-reader-text">%s</span>', theme ),
					        array(
						        'span' => array(
							        'class' => array(),
						        ),
					        )
				        ),
				        get_the_title()
			        ),
			        '<span class="edit-link">' . twentynineteen_get_icon_svg( 'edit', 16 ),
			        '</span>'
		        );
            """
        }
    }
}