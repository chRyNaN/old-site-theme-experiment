package com.chrynan.sitetheme.templates

import com.chrynan.sitetheme.viewmodel.PostItemViewModel
import kotlinx.html.*

class PostItemTemplate : Template<PostItemViewModel> {

    override fun <T> TagConsumer<T>.layout(viewModel: PostItemViewModel) = div {
        classes = setOf("card", "post-item", "mdl-card", "mdl-shadow--2dp")

        div {
            classes = setOf("card-media-background", "post-item-image-container", "mdl-card__media")

            if (viewModel.imageUrl != null) {
                style {
                    unsafe {
                        raw(
                            """
                                background-image: url('${viewModel.imageUrl}');
                            """.trimIndent()
                        )
                    }
                }
            }

            div {
                classes = setOf("post-item-title-container", "mdl-card__title")

                h2 {
                    classes = setOf("post-item-title", "mdl-card__title-text")

                    a {
                        classes = setOf("post-item-title-link")

                        +viewModel.title
                    }
                }

                if (viewModel.subtitle != null) {
                    h4 {
                        classes = setOf("post-item-subtitle", "mdl-card__subtitle-text")

                        +viewModel.subtitle
                    }
                }
            }
        }

        div {
            classes = setOf("post-item-excerpt", "mdl-card__supporting-text")

            +viewModel.excerpt
        }

        div {
            classes = setOf("post-item-details-container", "mdl-card__supporting-text")

            img {
                classes = setOf("author-thumbnail-image", "post-item-author-image")

                src = viewModel.authorImageUrl
                alt = viewModel.author
            }

            div {
                classes = setOf("post-item-details")

                strong {
                    classes = setOf("author-name", "post-item-details-author-name", "post-item-author-name")

                    +viewModel.author
                }

                span {
                    classes = setOf("post-item-details-date")

                    +viewModel.date
                }
            }
        }

        div {
            classes = setOf("post-item-link-container", "read-more-container", "mdl-card__actions", "mdl-card--border")

            a {
                classes = setOf(
                    "post-item-link",
                    "read-more",
                    "mdl-button",
                    "mdl-button--colored",
                    "mdl-js-button",
                    "mdl-js-ripple-effect"
                )

                href = viewModel.link

                +viewModel.readMoreText
            }
        }
    }
}