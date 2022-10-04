import deleteUserServices from "../services/deleteUser.services";

const deleteUserController = (req, res) => {
  const { id } = req.params;

  const deletedUser = deleteUserServices(id);

  return res.status(200).json({ message: deletedUser });
};

export default deleteUserController;
