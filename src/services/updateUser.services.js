import { users } from "../database/users.database";

const updateUserServices = (user, uuid) => {
  const userFind = users.find((user) => user.uuid === uuid);

  const userUpdate = {
    ...userFind,
    ...user,
    uuid,
    password: userFind.password,
    createdOn: userFind.createdOn,
    updatedOn: new Date(),
    isAdm: userFind.isAdm,
  };

  return { ...userUpdate, password: undefined };
};

export default updateUserServices;
