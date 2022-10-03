import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_POSTS = gql`
  query posts($username: String!) {
    posts(username: $username) {
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

export const QUERY_POST = gql`
  query post($id: ID!) {
    post(_id: $id) {
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

export const QUERY_TAG = gql`
  query tag($tagId: ID!) {
    tag(_id: $id) {
      _id
      category
      location
      posts {
        _id
        postTitle
        postText
        username
        tags
      }
    }
  }
`;
