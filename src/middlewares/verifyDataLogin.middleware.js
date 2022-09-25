import { users } from "../database/users.database";
import { compare } from "bcryptjs";

const verifyDataLoginMiddleware = async (req, res, next) => {
  const { email, password } = req.body;

  const user = users.find((elem) => elem.email === email);

  if (!user) {
    return res.status(401).json({ message: "Email or password invalid" });
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ message: "Email or password invalid" });
  }

  next();
};

export default verifyDataLoginMiddleware;
