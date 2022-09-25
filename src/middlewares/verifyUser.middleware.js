import { users } from "../database/users.database";

const verifyUserMiddleware = (req, res, next) => {
  const { uuid } = req.params;
  const indexUser = users.findIndex((user) => user.uuid === uuid);

  if (indexUser === -1) {
    return res.status(401).json({ message: "User not found" });
  }

  next();
};

export default verifyUserMiddleware;
