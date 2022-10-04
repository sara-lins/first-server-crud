import createUserServices from "../services/createUser.services";

const createUserController = async (req, res) => {
  const { name, email, password, isAdm } = req.body;

  const user = await createUserServices(name, email, password, isAdm);

  return res.status(201).json(user);
};

export default createUserController;
