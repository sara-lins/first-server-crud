import { Router } from "express";
import userLoginController from "../controllers/userLogin.controller";
import verifyDataLoginMiddleware from "../middlewares/verifyDataLogin.middleware";

export const route = Router();

route.post("", verifyDataLoginMiddleware, userLoginController);
