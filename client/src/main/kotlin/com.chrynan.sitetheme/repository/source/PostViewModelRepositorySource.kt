package com.chrynan.sitetheme.repository.source

import com.chrynan.sitetheme.repository.PostRepository
import com.chrynan.sitetheme.repository.PostViewModelRepository
import com.chrynan.sitetheme.viewmodel.PostItemViewModel

class PostViewModelRepositorySource : PostViewModelRepository {

    override suspend fun getMostRecentPosts(): List<PostItemViewModel> {
        return listOf(
            PostItemViewModel(
                title = "Test Title",
                subtitle = "Test Subtitle",
                excerpt = "This is the excerpt",
                imageUrl = null,
                date = "Today",
                author = "Me",
                authorImageUrl = "",
                link = "chrynan.codes",
                readMoreText = "Read More"
            ),
            PostItemViewModel(
                title = "Another Test Title",
                subtitle = "Another Test Subtitle",
                excerpt = "This is another the excerpt",
                imageUrl = null,
                date = "Yesterday",
                author = "Someone",
                authorImageUrl = "",
                link = "chrynan.codes",
                readMoreText = "Read More"
            )
        )
    }
}