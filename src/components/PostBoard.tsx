import { Link } from "react-router-dom";

import type { Post } from "../types";
import type { FC } from "react";

type Props = {
  posts: Post[];
};

const PostBoard: FC<Props> = ({ posts }) => {
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostBoard;
