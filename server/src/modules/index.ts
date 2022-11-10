import { Router } from "express";
import { authRouter } from "./auth";

export const generalRouter = Router();

generalRouter.use("/auth", authRouter);
