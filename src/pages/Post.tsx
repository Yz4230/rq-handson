import { Navigate, useParams } from "react-router-dom";

import Loading from "../components/Loading";
import { useFetchPost } from "../hooks/post";

import type { FC } from "react";

type Props = {
  id: number;
};

const Content: FC<Props> = ({ id }) => {
  const post = useFetchPost(id);

  return (
    <div>
      {post.isLoading && <Loading />}
      {post.data && (
        <div>
          <h1>{post.data.title}</h1>
          <p>{post.data.body}</p>
        </div>
      )}
    </div>
  );
};

const Post: FC = () => {
  const { id } = useParams<"id">();

  if (id && id.match(/^\d+$/)) {
    return <Content id={Number(id)} />;
  }

  return <Navigate to="/posts" />;
};

export default Post;
