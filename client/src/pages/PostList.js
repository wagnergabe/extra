import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import PostForm from '../components/PostForm/PostForm';

const PostList = ({ posts, postTitle }) => {
    /* if (!posts.length) {
        return <h3>No Posts Yet... Be The First!</h3>; 
    } */

    return (
        <div>
            
            <div className="dark:bg-gray-800 dark:text-gray-100">
            <button className="fixed bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create A Post</button>
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <a href="/" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Tag #1</a>
                    </div>
                    <div className="mt-3">
                        <a href="/" className="text-2xl font-bold hover:underline">Post Title</a>
                        <p className="mt-2">Post Body! Tamquam ita veritas res equidem. Ea in ad expertus paulatim poterunt. Imo volo aspi novi tur. Ferre hic neque vulgo hae athei spero. Tantumdem naturales excaecant notaverim etc cau perfacile occurrere. Loco visa to du huic at in dixi aër.</p>
                    </div>

                    <div className="flex justify-end mt-4">
                            <a href="/">
                                <div>
                                    <span className="hover:underline dark:text-gray-400">Original Poster</span>
                                </div>
                            </a>
                    </div>
                </div>
            </div>

            <div className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <a href="/" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Tag #1</a>
                    </div>
                    <div className="mt-3">
                        <a href="/" className="text-2xl font-bold hover:underline">Post Title</a>
                        <p className="mt-2">Post Body! Tamquam ita veritas res equidem. Ea in ad expertus paulatim poterunt. Imo volo aspi novi tur. Ferre hic neque vulgo hae athei spero. Tantumdem naturales excaecant notaverim etc cau perfacile occurrere. Loco visa to du huic at in dixi aër.</p>
                    </div>

                    <div className="flex justify-end mt-4">
                            <a href="/">
                                <div>
                                    <span className="hover:underline dark:text-gray-400">Original Poster</span>
                                </div>
                            </a>
                    </div>
                </div>
            </div>
            <div className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <a href="/" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Tag #1</a>
                    </div>
                    <div className="mt-3">
                        <a href="/" className="text-2xl font-bold hover:underline">Post Title</a>
                        <p className="mt-2">Post Body! Tamquam ita veritas res equidem. Ea in ad expertus paulatim poterunt. Imo volo aspi novi tur. Ferre hic neque vulgo hae athei spero. Tantumdem naturales excaecant notaverim etc cau perfacile occurrere. Loco visa to du huic at in dixi aër.</p>
                    </div>

                    <div className="flex justify-end mt-4">
                            <a href="/">
                                <div>
                                    <span className="hover:underline dark:text-gray-400">Original Poster</span>
                                </div>
                            </a>
                    </div>
                </div>
            </div>
            <div className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <a href="/" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Tag #1</a>
                    </div>
                    <div className="mt-3">
                        <a href="/" className="text-2xl font-bold hover:underline">Post Title</a>
                        <p className="mt-2">Post Body! Tamquam ita veritas res equidem. Ea in ad expertus paulatim poterunt. Imo volo aspi novi tur. Ferre hic neque vulgo hae athei spero. Tantumdem naturales excaecant notaverim etc cau perfacile occurrere. Loco visa to du huic at in dixi aër.</p>
                    </div>

                    <div className="flex justify-end mt-4">
                            <a href="/">
                                <div>
                                    <span className="hover:underline dark:text-gray-400">Original Poster</span>
                                </div>
                            </a>
                    </div>
                </div>
            </div>


            {/* <h3>{postTitle}</h3> */}
            {/* {posts &&
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
                */}
        </div >
    )

};

export default PostList;