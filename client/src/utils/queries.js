import { gql } from "@apollo/client";

export const QUERY_POSTS = gql`
  query posts($username: String!) {
    posts(username: $username) {
      _id
      postTitle
      postText
      username
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
    }
  }
`;

export const QUERY_COMMENTS = gql`
  query comments($post_id: ID!) {
    comments(filter: ) {
      _id
      commentContent
      commentDate
      commentUser
    }
  }
`;
