import { Link, useLoaderData } from "react-router";

export const PostList = () => {
  const { posts } = useLoaderData();
  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/post/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>
            {post.body.slice(0, 24)}
            {post.body.length > 24 ? "..." : ""}
          </p>
        </div>
      ))}
    </div>
  );
};

export const loader = async () => {
  const res = await fetch("http://localhost:3000/posts");
  if (!res.ok) throw new Error("Could not fetch ");

  return { posts: await res.json() };
};
