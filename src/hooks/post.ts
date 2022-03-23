import { useQuery } from "react-query";

import api from "../api";

export const useFetchPost = (id: number) => {
  const { data, isLoading, isError } = useQuery(["post", { id }], () =>
    api.v1.posts.fetchPost(id)
  );
  return { data, isLoading, isError };
};

export const useFetchPosts = () => {
  const { data, isLoading, isError } = useQuery("posts", () =>
    api.v1.posts.fetchPosts()
  );
  return { data, isLoading, isError };
};

export const useFetchPostComments = (id: number) => {
  const { data, isLoading, isError } = useQuery(["postComments", { id }], () =>
    api.v1.posts.fetchPostComments(id)
  );
  return { data, isLoading, isError };
};

export const useFetchPostsByUserId = (userId: number) => {
  const { data, isLoading, isError } = useQuery(["posts", { userId }], () =>
    api.v1.posts.fetchPostsByUserId(userId)
  );
  return { data, isLoading, isError };
};
