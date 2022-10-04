import readLoggedUserServices from "../services/readLoggedUser.services";

const readLoggedUserController = (req, res) => {
  const { uuid } = req.user;

  const user = readLoggedUserServices(uuid);

  return res.json(user);
};

export default readLoggedUserController;
