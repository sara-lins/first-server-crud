const verifyIsAdmMiddleware = (req, res, next) => {
  const { isAdm } = req.user;

  if (!isAdm) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
};

export default verifyIsAdmMiddleware;
