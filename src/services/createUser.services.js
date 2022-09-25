import { users } from "../database/users.database.js";
import { v4 as uuidv4 } from "uuid";
import * as bycrypt from "bcryptjs";

const createUserServices = async (name, email, password, isAdm) => {
  const hashedPassword = await bycrypt.hash(password, 10);

  const newUser = {
    uuid: uuidv4(),
    name,
    email,
    password: hashedPassword,
    isAdm,
    createdOn: new Date(),
    updatedOn: new Date(),
  };

  users.push(newUser);

  return { ...newUser, password: undefined };
};

export default createUserServices;
