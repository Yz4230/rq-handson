import { Link } from "react-router-dom";

import type { User } from "../types";
import type { FC } from "react";

type Props = {
  users: User[];
};

const UserBoard: FC<Props> = ({ users }) => {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserBoard;
