import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Post, loader as postLoader } from "./Post";
import { loader as postListLoader, PostList } from "./PostList";
import NewPost from "./NewPost";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <PostList />, loader: postListLoader },
      {
        path: "/post/:postId",
        element: <Post />,
        loader: postLoader,
      },
      { path: "/post/new", element: <NewPost /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
