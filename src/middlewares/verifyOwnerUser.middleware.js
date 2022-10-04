const verifyOwnerUserMiddleware = (req, res, next) => {
  const { uuid } = req.params;

  if (req.user.uuid !== uuid && req.user.isAdm === false) {
    return res.status(401).json({ message: "Missing Authorization Header" });
  }

  next();
};

export default verifyOwnerUserMiddleware;
