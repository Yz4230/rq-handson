import PostBoard from "../components/PostBoard";
import UserBoard from "../components/UserBoard";
import { useFetchPosts } from "../hooks/post";
import { useFetchUsers } from "../hooks/user";

import type { FC } from "react";

const Home: FC = () => {
  const users = useFetchUsers();
  const posts = useFetchPosts();

  return (
    <div>
      {users.data && <UserBoard users={users.data} />}
      {posts.data && <PostBoard posts={posts.data} />}
    </div>
  );
};

export default Home;
