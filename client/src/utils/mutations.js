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


export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password){
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password){
        token
        user {
            _id
            username
        }
    }
}
`;