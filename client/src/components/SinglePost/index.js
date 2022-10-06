import React from "react";
import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_POST } from "../utils/queries";
import { QUERY_COMMENTS } from "../../utils/queries";

const comments = [
  {
    commentContent: "Comment 1",
    commentDate: "2022-10-04",
    commentUser: "User 1",
  },
  {
    commentContent: "Comment 2",
    commentDate: "2022-10-04",
    commentUser: "User 2",
  },
  {
    commentContent: "Comment 3",
    commentDate: "2022-10-04",
    commentUser: "User 3",
  },
];

const SinglePost = (props) => {
  const { id: _id } = useParams();

  const { loading: postQueryLoading, data: postData } = useQuery(QUERY_POST, {
    variables: { id: _id },
  });
  const { loading: commentQueryLoading, data: commentData } = useQuery(
    QUERY_COMMENTS,
    {
      variables: { post_id: _id },
    }
  );
  const post = postData?.post || {};

  if (postQueryLoading || commentQueryLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {post.title}
          </span>{" "}
          by {post.username}
        </p>
        <div className="card-body">
          <p>{post.postText}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
