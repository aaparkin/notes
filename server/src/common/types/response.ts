export type ResponseError = {
  code?: number;
  name?: string;
  message?: string;
};

export interface IResponse<T> {
  data: T;
  error: ResponseError | null;
  methodError?: unknown
}
