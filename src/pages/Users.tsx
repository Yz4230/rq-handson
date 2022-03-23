import UserBoard from "../components/UserBoard";
import { useFetchUsers } from "../hooks/user";

import type { FC } from "react";

const Users: FC = () => {
  const users = useFetchUsers();

  return <div>{users.data && <UserBoard users={users.data} />}</div>;
};

export default Users;
