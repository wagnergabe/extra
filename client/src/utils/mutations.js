import { gql } from "@apollo/client";

export const ADD_POST = gql`
  mutation addPost($postTitle: String!, $postText: String!, $tags: String!) {
    addPost(postTitle: $postTitle, postText: $postText, tags: $tags) {
      _id
      postTitle
      postText
      username
      tags
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
      tags
    }
  }
`;

export const EDIT_POST = gql`
  mutation editPost(
    $postTitle: String!
    $postText: String!
    $username: String!
    $tags: String!
  ) {
    editPost(
      postTitle: $postTitle
      postText: $postText
      username: $username
      tags: $tags
    ) {
      _id
      postTitle
      postText
      username
      tags
    }
  }
`;
