import { ChildrenProps, IUser } from '@/models';
import { ValidationConfig } from '@/utils';

export type HeaderProps = {
  avatar?: string | null;
  displayName?: string;
  login?: string;
  score?: number;
  onAvatarChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type ColumnProps = {
  title: string;
  actions?: JSX.Element | JSX.Element[];
} & ChildrenProps;

export type PasswordForm = {
  oldPassword: string;
  newPassword: string;
  newPasswordRepeat: string;
};

export type ProfileValidationConfig = Record<
  keyof Omit<IUser, 'id'>,
  ValidationConfig[]
>;

export type PasswordValidationConfig = Record<
  keyof PasswordForm,
  ValidationConfig[]
>;
