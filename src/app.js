import express from "express";
import "dotenv/config";
import { route as userRouter } from "./routers/users.routes";
import { route as loginRouter } from "./routers/login.routes";

const app = express();
app.use(express.json());

const PORT = 3000;

app.use("/users", userRouter);
app.use("/login", loginRouter);

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});

export default app;
