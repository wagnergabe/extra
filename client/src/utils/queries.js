import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    _id
    username
    email
    posts {
      _id
      postTitle
      postText
      username
      tags
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
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

export const QUERY_COMMENTS = gql`
  query comments($post_id: ID!) {
    comments(filter: $post_id) {
      _id
      commentContent
      commentDate
      commentUser
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
      tags
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
      tags
    }
  }
`;

export const QUERY_TAGGED_POSTS = gql`
  query taggedPosts($tags: String!) {
    taggedPosts(tags: $tags) {
      _id
      postTitle
      postText
      username
      tags
    }
  }
`;
