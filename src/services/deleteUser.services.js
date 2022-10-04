import { users } from "../database/users.database";

const deleteUserServices = (id) => {
  const indexUser = users.findIndex((user) => user.id === id);

  users.splice(indexUser, 1);

  return "Deleted user";
};

export default deleteUserServices;
