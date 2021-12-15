/* eslint camelcase: "off" */
export interface IUser {
  avatar?: string | null;
  displayName?: string;
  email: string;
  firstName: string;
  id?: number;
  login: string;
  phone: string;
  secondName: string;
}
export interface IBaseUser {
  userId?: number;
  name?: string;
  avatar?: string | null | undefined;
}
