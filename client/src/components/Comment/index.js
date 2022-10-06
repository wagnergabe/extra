const Comment = (props) => {
  const commentContent = props.commentContent;
  const commentDate = props.commentDate;
  const commentUser = props.commentUser;

  return (
    <div>
      <p>{commentContent}</p>
      <p>{commentDate}</p>
      <p>{commentUser}</p>
    </div>
  );
};

export default Comment;
