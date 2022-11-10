import { RequestHandler } from "express";
import { ErrorController } from "../error/error-controller";
import { verify } from "jsonwebtoken";

export const isAdmin: RequestHandler = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return ErrorController.badRequest(res, "token is required");
    }

    const user = verify(token, process.env.TOKEN as string);

    if (!user) {
      return ErrorController.badRequest(res, "token is incorrect");
    }

    // TODO: get userId, userRole, etc... and write it to user object

    req.user = user;

    next();
  } catch (e) {
    return ErrorController.somethingWentWrong(res, e);
  }
};
