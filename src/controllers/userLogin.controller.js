import userLoginService from "../services/userLogin.services";

const userLoginController = (req, res) => {
  const { email } = req.body;

  const token = userLoginService(email);

  return res.status(200).json({ token });
};

export default userLoginController;
