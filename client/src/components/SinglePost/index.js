import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../utils/queries';

const SinglePost = (props) => {
    const { id: _id } = useParams();

    const { loading, data } = useQuery(QUERY_POST, {
        variables: { id: _id },
    });

    const post = data?.post || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className='card mb-3'>
                <p className='card-header'>
                    <span style={{ fontWeight: 700 }} className='text-light'>
                        {post.title}
                    </span>{' '}
                    by {post.username}
                </p>
                <div className='card-body'>
                    <p>{post.postText}</p>
                </div>
            </div>
        </div>
    );
};

export default SinglePost;