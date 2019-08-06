package com.chrynan.sitetheme.model

data class Revision(
    override val id: ID,
    /**
     * The author field will return a queryable User type matching the post&#039;s author.
     */
    val author: User? = null,
    /**
     * Whether the comments are open or closed for this particular post.
     */
    val commentStatus: String? = null,
    /**
     * Post publishing date.
     */
    val date: String? = null,
    /**
     * The desired slug of the post
     */
    val desiredSlug: String? = null,
    /**
     * The user that most recently edited the object
     */
    val editLast: User? = null,
    /**
     * The RSS enclosure for the object
     */
    val enclosure: String? = null,
    /**
     * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the
     * guid column in the &quot;post_objects&quot; database table.
     */
    val guid: String? = null,
    /**
     * The permalink of the post
     */
    val link: String? = null,
    /**
     * A field used for ordering posts. This is typically used with nav menu items or for special ordering of
     * hierarchical content types.
     */
    val menuOrder: Int? = null,
    /**
     * The local modified time for a post. If a post was recently updated the modified field will change to match the
     * corresponding time.
     */
    val modified: String? = null,
    /**
     * The id field matches the WP_Post-&gt;ID field.
     */
    val revisionId: Int,
    /**
     * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in
     * the database for the &quot;post_objects&quot; table.
     */
    val slug: String? = null,
    /**
     * URI path for the resource
     */
    val uri: String? = null
) : Node