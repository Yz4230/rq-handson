import { Navigate, useParams } from "react-router-dom";

import Loading from "../components/Loading";
import PostBoard from "../components/PostBoard";
import { useFetchPostsByUserId } from "../hooks/post";
import { useFetchUser } from "../hooks/user";

import type { FC } from "react";

type Props = {
  id: number;
};

const Content: FC<Props> = ({ id }) => {
  const user = useFetchUser(id);
  const posts = useFetchPostsByUserId(id);

  return (
    <div>
      {user.isLoading && <Loading />}
      {user.data && (
        <div>
          <h1>{user.data.name}</h1>
          <p>{user.data.email}</p>
        </div>
      )}
      {posts.isLoading && <Loading />}
      {posts.data && <PostBoard posts={posts.data} />}
    </div>
  );
};

const User: FC = () => {
  const { id } = useParams<"id">();

  if (id && id.match(/^\d+$/)) {
    return <Content id={Number(id)} />;
  }

  return <Navigate to="/users" />;
};

export default User;
