import { gql } from "@apollo/client";

export const QUERY_TAG = gql`
  query tag($tagId: ID!) {
    tag(_id: $id) {
      _id
      category
      location
      posts {
        _id: ID
        postTitle
        postText
        username
        tags
      }
    }
  }
`;
