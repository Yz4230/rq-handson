import { useQuery } from "react-query";

import api from "../api";

export const useFetchUser = (id: number) => {
  const { data, isLoading, isError } = useQuery(["user", { id }], () =>
    api.v1.users.fetchUser(id)
  );
  return { data, isLoading, isError };
};

export const useFetchUsers = () => {
  const { data, isLoading, isError } = useQuery("users", () =>
    api.v1.users.fetchUsers()
  );
  return { data, isLoading, isError };
};
