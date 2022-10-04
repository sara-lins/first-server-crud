import updateUserServices from "../services/updateUser.services";

const updateUserController = (req, res) => {
  const { uuid } = req.params;
  const user = req.body;

  const updateUser = updateUserServices(user, uuid);

  return res.status(200).json(updateUser);
};

export default updateUserController;
