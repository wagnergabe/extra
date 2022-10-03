import { gql } from "@apollo/client";

export const ADD_POST = gql`
  mutation addPost(
    $postTitle: String!
    $postText: String!
    $username: String!
  ) {
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
  mutation editPost(
    $postTitle: String!
    $postText: String!
    $username: String!
  ) {
    editPost(postTitle: $postTitle, postText: $postText, username: $username) {
      _id
      postTitle
      postText
      username
    }
  }
`;

export const ADD_TAG = gql`
  mutation addTag($input: TagInput!) {
    addTag(input: $input) {
      _id
      postTitle
      postText
      username
      tags {
        _id
        category
        location
      }
    }
  }
`;

export const REMOVE_TAG = gql`
  mutation removeTag($_id: ID!) {
    removeTag(_id: $_id) {
        _id
        postTitle
        postText
        username
        tags {
          _id
          category
          location
        }
    }
`;
