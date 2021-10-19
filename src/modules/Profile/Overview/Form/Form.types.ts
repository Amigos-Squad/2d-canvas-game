import { IUser } from '@/models';
import { PasswordForm } from '..';

export type Props = {
  onChange: (event: React.FormEvent<unknown>) => void;
  togglePassword: () => void;
  isPassword: boolean;
  isChanged: boolean;
  form: IUser;
  reset: () => void;
  update: () => void;
  passForm: PasswordForm;
};
