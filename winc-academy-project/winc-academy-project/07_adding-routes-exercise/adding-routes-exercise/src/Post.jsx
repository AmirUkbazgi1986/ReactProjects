import { useLoaderData } from "react-router";

export const Post = () => {
  const { post, comments } = useLoaderData();

  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      {comments.length > 0 && (
        <div>
          <h2>Comments:</h2>
          {comments.map((comment) => (
            <div key={comment.id}>
              <p>{comment.comment}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export const loader = async function loader({ params }) {
  const post = await fetch(`http://localhost:3000/posts/${params.postId}`);
  const comments = await fetch(
    `http://localhost:3000/comments?postId=${params.postId}`,
  );

  return {
    post: await post.json(),
    comments: await comments.json(),
  };
};
