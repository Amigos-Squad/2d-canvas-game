import { IUser } from '@/models';

export type Props = {
  onChange: (event: React.FormEvent<unknown>) => void;
  togglePassword: () => void;
  isPassword: boolean;
  password: string;
  newPassword: string;
  repeatPassword: string;
} & IUser;
