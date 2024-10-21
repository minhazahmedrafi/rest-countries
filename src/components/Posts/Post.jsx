const Post = ({ post }) => {
  const { id, title, body } = post;
  return (
    <div>
      <h3>{id}</h3>
      <h5>{title}</h5>
      <p>{body}</p>
      <br />
    </div>
  );
};

export default Post;
