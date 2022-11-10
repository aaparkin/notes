import { Router } from "express";
import { ErrorController } from "../../common/error/error-controller";
import { sign } from "jsonwebtoken";

export const authRouter = Router();

authRouter.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return ErrorController.badRequest(res, "email and password are required");
    }

    // TODO: check email and password if it already exist

    const { token, error: tokenError } = generateAccessToken(email, password);

    if (!token) {
      return ErrorController.somethingWentWrong(res, tokenError);
    }

    res.json({ token: token });

  } catch (e: unknown) {
    return ErrorController.somethingWentWrong(res, e);
  }
});

function generateAccessToken(
  email: string,
  password: string
): { token: string; error: any } {
  let token = "",
    error = null;

  try {
    if (!password) {
      return { token, error };
    }

    token = sign({ email, password }, process.env.TOKEN as string, {
      expiresIn: "1d",
    });

    return { token, error };
  } catch (e) {
    return { token: "", error: e };
  }
}
