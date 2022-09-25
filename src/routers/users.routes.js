import { Router } from "express";
import createUserController from "../controllers/createUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import readLoggedUserController from "../controllers/readLoggedUser.controller";
import readUserController from "../controllers/readUser.controller";
import updateUserController from "../controllers/updateUser.controller";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";
import verifyIsAdmMiddleware from "../middlewares/verifyIsAdm.middleware";
import verifyOwnerUserMiddleware from "../middlewares/verifyOwnerUser.middleware";
import verifyUserMiddleware from "../middlewares/verifyUser.middleware";

export const route = Router();

route.post("", verifyEmailAvailabilityMiddleware, createUserController);
route.get(
  "",
  verifyAuthTokenMiddleware,
  verifyIsAdmMiddleware,
  readUserController
);
route.get("/profile", verifyAuthTokenMiddleware, readLoggedUserController);
route.patch(
  "/:uuid",
  verifyAuthTokenMiddleware,
  verifyOwnerUserMiddleware,
  verifyUserMiddleware,
  updateUserController
);
route.delete(
  "/:uuid",
  verifyAuthTokenMiddleware,
  verifyOwnerUserMiddleware,
  verifyUserMiddleware,
  deleteUserController
);
