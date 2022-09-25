import { users } from "../database/users.database";

const readLoggedUserServices = (uuid) => {
  const user = users.find((user) => user.uuid === uuid);

  return { ...user, password: undefined };
};

export default readLoggedUserServices;
