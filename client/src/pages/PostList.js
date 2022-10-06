import React from 'react';

const PostList = ({ posts, postTitle }) => {

    const renderTags = (tags) => {
        return tags.map((tag) => (
            <a
                href="/"
                className="px-2 py-1 font-bold rounded dark:bg-emerald-500 dark:text-gray-900"
            >
                {tag}
            </a>
        ));
    };

    const renderPosts = (posts) => {
        return posts.map((post) => (
            <div className="container max-w-4xl px-10 py-6 my-5 mx-auto rounded-lg shadow-sm dark:bg-cyan-700 text-white">
                <div className="flex items-center justify-between">
                    {renderTags(post.tags)}
                </div>
                <div className="mt-3">
                    <a href="/" className="text-2xl font-bold hover:underline">
                        {post.postTitle}
                    </a>
                    <p className="mt-2">{post.postText}</p>
                </div>

                <div className="flex justify-end mt-4">
                    <a href="/">
                        <div>
                            <span className="hover:underline text-white">{post.username}</span>
                        </div>
                    </a>
                </div>
            </div>
        ));
    };

    return (
        <div>
            {renderPosts}
        </div>
    );
};


export default PostList;