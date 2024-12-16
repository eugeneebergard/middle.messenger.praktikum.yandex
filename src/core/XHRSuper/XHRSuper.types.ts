export enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export type TOptions = {
  data?: any,
  headers?: Record<string, string>
  timeout?: number
  tries?: number
} | undefined;

export type TRequestOptions = {
  method: METHODS
} & TOptions;
