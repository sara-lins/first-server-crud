import jwt from "jsonwebtoken";
import { users } from "../database/users.database";

const userLoginService = (email) => {
  const user = users.find((elem) => elem.email === email);
  const token = jwt.sign({ isAdm: user.isAdm }, "SECRET_KEY", {
    expiresIn: "24h",
    subject: `${user.uuid}`,
  });

  return token;
};

export default userLoginService;
