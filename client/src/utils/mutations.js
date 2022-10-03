import { gql } from '@apollo/client';

export const ADD_POST = gql`
    mutation addPost($postTitle: String!, $postText: String!, $username: String!) {
        addPost(postTitle: $postTitle, postText: $postText, username: $username) {
            _id
            postTitle
            postText
            username
        }
    }
`;

export const REMOVE_POST = gql`
    mutation removePost($_id: ID!) {
        removePost(_id: $ID) {
            _id
            postTitle
            postText
            username
        }
    }
`;

export const EDIT_POST = gql`
    mutation editPost($postTitle: String!, $postText: String!, $username: String!) {
        editPost(postTitle: $postTitle, postText: $postText, username: $username) {
            _id
            postTitle
            postText
            username
        }
    }
`;