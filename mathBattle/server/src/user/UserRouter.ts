import { Router } from "express";
import { loginUser } from "./user-login";
import { registerUser } from "./user-register";


export const UserRouter = Router();

UserRouter.post("/login", loginUser);
UserRouter.post("/register", registerUser);