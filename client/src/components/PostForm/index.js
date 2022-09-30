import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
// I'm using QUERY_ME even though it hasn't been set up yet //
// So we need to make sure to set that up before we're finished //
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';

const PostForm = () => {
    const [postTitle, setTitle] = useState('');
    const [postText, setText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);

    const [addPost, { error }] = useMutation(ADD_POST, {
        update(cache, { data: {addPost } }) {

            try {
                const { me } = cache.readQuery({ query: QUERY_ME });
                cache.writeQuery({
                    query: QUERY_ME,
                    data: { me: { ...me, posts: [...me.posts, addPost] } },
                });
            } catch (e) {
                console.warn("First post insertion by user!")
            }

            const { posts } = cache.readQuery({ query: QUERY_POSTS });
            cache.writeQuery({
                query: QUERY_POSTS,
                data: { posts: [addPost, ...posts] },
            });
        }
    });

    const handleChange = (event) => {
        if (event.target.value.length <= 500000) {
            setText(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await addPost({
                variables: { postTitle, postText },
            });

            setTitle('');
            setText('');
            setCharacterCount(0);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <p
            className={`m-0 ${characterCount === 500000 || error ? 'text-error' : ''}`}
            >
                Character Count: {characterCount}/500000
                {error && <span className="ml-2">Something's awry...</span>}
            </p>
            <form
                className='flex-row justify-center justify-space-between-md align-stretch'
                onSubmit={handleFormSubmit}
            >
                <textarea
                    placeholder="Title"
                    value={postTitle}
                    className='form-input col-12 col-md-9'
                    onChange={handleChange}
                ></textarea>
                <textarea
                    placeholder="Post Text"
                    value={postText}
                    className='form-input col-12 col-md-9'
                    onChange={handleChange}
                ></textarea>
                <button className='btn col-12 col-md-3' type='submit'>
                    Submit!
                </button>
            </form>    
        </div>
    );
};

export default PostForm;