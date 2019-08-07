package com.chrynan.sitetheme.source

import com.chrynan.graphqlquerybuilder.fragment
import com.chrynan.graphqlquerybuilder.rangeTo
import com.chrynan.sitetheme.query.*

val categoryListItemFragment by lazy {
    fragment<CategoryQueryBuilder>() on {
        id
        categoryId
        link
        name
        description
    }
}

val revisionListItemFragment by lazy {
    fragment<RevisionQueryBuilder>() on {
        id
        revisionId
        link
        uri
        date
        title()
        excerpt()
    }
}

val tagListItemFragment by lazy {
    fragment<TagQueryBuilder>() on {
        id
        tagId
        link
        name
        description
    }
}

val postListItemFragment by lazy {
    fragment<PostQueryBuilder>() on {
        id
        commentCount
        date
        link
        uri
        title()
        excerpt()
        tags {
            nodes {
                this..tagListItemFragment
            }
        }
        revisions {
            nodes {
                this..revisionListItemFragment
            }
        }
        categories {
            nodes {
                this..categoryListItemFragment
            }
        }
    }
}

val pageInfoFragment by lazy {
    fragment<WPPageInfoQueryBuilder>() on {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
    }
}