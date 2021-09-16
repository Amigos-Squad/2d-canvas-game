import { METHODS } from './const';

export interface IRequestOptions {
  data?: any;
  timeout?: number;
  isFormData?: boolean;
  headers?: Record<string, string>;
}

export interface IRequestConfig {
  method: METHODS;
  credentials: RequestCredentials;
  mode: RequestMode;
  headers: Record<string, string>;
  body?: string;
}

export interface ICommonResponse<T> {
  data: T;
  success: boolean;
  total: number;
  message: string;
}

export interface IFetchRequestOptions extends IRequestOptions {
  method: METHODS;
}
