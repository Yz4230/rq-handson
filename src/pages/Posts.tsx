import PostBoard from "../components/PostBoard";
import { useFetchPosts } from "../hooks/post";

import type { FC } from "react";

const Posts: FC = () => {
  const posts = useFetchPosts();

  return <div>{posts.data && <PostBoard posts={posts.data} />}</div>;
};

export default Posts;
