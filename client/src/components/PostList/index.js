import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts, postTitle }) => {
    if (!posts.length) {
        return <h3>No Posts Yet... Be The First!</h3>; 
    }

    return (
        <div>
            <h3>{postTitle}</h3>
            {posts &&
                posts.map(post => (
                    <div key={post._id} className='card mb-3'>
                        <p className='card-header'>
                            <Link
                            to={`/profile/${post.username}`}
                            style={{ fontWeight: 700 }}
                            className='text-light'
                            >
                                {post.username}
                            </Link>{' '}
                        </p>
                    </div>
                ))}
        </div>
    )
};

export default PostList;