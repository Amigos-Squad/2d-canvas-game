export type Props = {
  children: JSX.Element | JSX.Element[];
};

export interface IRegistrationForm {
  login: string;
  email: string;
  firstName: string;
  secondName: string;
  phoneNumber: string;
  password: string;
  passwordRepeat: string;
}

export interface ILoginForm {
  login: string;
  email: string;
  firstName: string;
  secondName: string;
  phoneNumber: string;
  password: string;
  passwordRepeat: string;
}
