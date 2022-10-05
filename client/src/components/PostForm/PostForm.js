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
        update(cache, { data: { addPost } }) {

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
            <div className='mx-96 my-24 w-full max-w-xl h-full'>
                 <form
                    className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
                    onSubmit={handleFormSubmit}
                >
                    <div class='mb-4'>
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="post-title">
                            Post Title
                        </label>
                        <textarea
                            placeholder="Title"
                            value={postTitle}
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            onChange={handleChange}
                        ></textarea>
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="post-body">
                            Post:
                        </label>
                        <textarea
                            placeholder="Post Text"
                            value={postText}
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                            onChange={handleChange}
                        ></textarea>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
                            Submit!
                        </button>
                    </div>
                </form>
                <div>   
                <p className={`mx-48 ${characterCount === 500000 || error ? 'text-error' : ''}`}>
                    Character Count: {characterCount}/500000
                    {error && <span className="ml-2">Something's awry...</span>}
                </p>
            </div>
            </div>
        </div>
    );
};

export default PostForm;