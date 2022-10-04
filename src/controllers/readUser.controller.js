import readUserServices from "../services/readUser.services";

const readUserController = (_, res) => {
  const users = readUserServices();

  return res.status(200).json(users);
};

export default readUserController;
