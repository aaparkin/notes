import { Response } from "express";

type ErrorObject = {
  name?: string;
  code?: number;
  message?: string;
  methodError?: unknown;
};

export class ErrorController {
  private static getErrorObject({
    name,
    message,
    code,
    methodError,
  }: ErrorObject) {
    return (
      methodError || {
        data: null,
        error: {
          name,
          message,
          code,
        },
      }
    );
  }

  static notFound(response: Response, message: string) {
    return response.json(
      this.getErrorObject({
        code: 404,
        name: "Not found",
        message,
      })
    );
  }

  static somethingWentWrong(response: Response, methodError?: unknown) {
    return response.json(
      this.getErrorObject({
        methodError,
        code: 501,
        name: "Something went wrong",
        message: "Something went wrong, try reload page or wait for 1 hour",
      })
    );
  }

  static badRequest(response: Response, message: string) {
    return response.json(
      this.getErrorObject({
        code: 400,
        name: "Bad request",
        message,
      })
    );
  }

  static forbidden(response: Response, message: string) {
    return response.json(
      this.getErrorObject({
        code: 400,
        name: "Forbidden",
        message,
      })
    );
  }
}
