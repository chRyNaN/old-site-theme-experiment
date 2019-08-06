package com.chrynan.sitetheme.model

data class Comment(
    /**
     * The globally unique identifier for the user
     */
    override val id: ID,
    /**
     * User agent used to post the comment. This field is equivalent to WP_Comment-&gt;comment_agent and the value
     * matching the &quot;comment_agent&quot; column in SQL.
     */
    val agent: String? = null,
    /**
     * The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value
     * matching the &quot;comment_approved&quot; column in SQL.
     */
    val approved: Boolean? = null,
    /**
     * IP address for the author. This field is equivalent to WP_Comment-&gt;comment_author_IP and the value matching
     * the &quot;comment_author_IP&quot; column in SQL.
     */
    val authorIp: String? = null,
    /**
     * ID for the comment, unique among comments.
     */
    val commentId: Int? = null,
    /**
     * Date the comment was posted in local time. This field is equivalent to WP_Comment-&gt;date and the value matching
     * the &quot;date&quot; column in SQL.
     */
    val date: String? = null,
    /**
     * Whether the object is restricted from the current viewer
     */
    val restricted: Boolean? = null,
    /**
     * Karma value for the comment. This field is equivalent to WP_Comment-&gt;comment_karma and the value matching the
     * &quot;comment_karma&quot; column in SQL.
     */
    val karma: Int? = null,
    /**
     * Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and the value matching the
     * &quot;comment_type&quot; column in SQL.
     */
    val type: String? = null
) : Node