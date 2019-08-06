package com.chrynan.sitetheme.model

data class User(
    override val id: ID,
    /**
     * Description of the user.
     */
    val description: String? = null,
    /**
     * Email of the user. This is equivalent to the WP_User-&gt;user_email property.
     */
    val email: String? = null,
    /**
     * First name of the user. This is equivalent to the WP_User-&gt;user_first_name property.
     */
    val firstName: String? = null,
    /**
     * Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property.
     */
    val lastName: String? = null,
    /**
     * The preferred language locale set for the user. Value derived from get_user_locale().
     */
    val locale: String? = null,
    /**
     * Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property.
     */
    val name: String? = null,
    /**
     * The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename
     */
    val nicename: String? = null,
    /**
     * Nickname of the user.
     */
    val nickname: String? = null,
    /**
     * The date the user registered or was created. The field follows a full ISO8601 date string format.
     */
    val registeredDate: String? = null,
    /**
     * The slug for the user. This field is equivalent to WP_User-&gt;user_nicename
     */
    val slug: String? = null,
    /**
     * A website url that is associated with the user.
     */
    val url: String? = null,
    /**
     * The Id of the user. Equivalent to WP_User-&gt;ID
     */
    val userId: Int? = null,
    /**
     * Username for the user. This field is equivalent to WP_User-&gt;user_login.
     */
    val username: String? = null,
    val avatar: Avatar? = null
) : Node