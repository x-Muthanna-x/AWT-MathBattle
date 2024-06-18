import { Router } from "express";
import { loginUser } from "./user-login";
import { registerUser } from "./user-register";
import { Request, Response } from "express";
import { tryProcess } from "../helper/tryProcess";


export const UserRouter = Router();

UserRouter.post("/login", (req: Request, res: Response) => tryProcess(req, res, loginUser));
UserRouter.post("/register", (req: Request, res: Response) => tryProcess(req, res, registerUser));