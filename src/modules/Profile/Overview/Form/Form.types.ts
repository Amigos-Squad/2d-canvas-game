import { FormEvent } from 'react';
import { IUser } from '@/models';
import { PasswordForm } from '..';

export type Props = {
  isPassword: boolean;
  isChanged: boolean;
  form: IUser;
  errors: Record<keyof IUser, string>;
  passForm: PasswordForm;
  passErrors: Record<keyof PasswordForm, string>;
  onChange: (event: React.FormEvent<unknown>) => void;
  togglePassword: () => void;
  reset: () => void;
  update: (event: FormEvent) => void;
};
