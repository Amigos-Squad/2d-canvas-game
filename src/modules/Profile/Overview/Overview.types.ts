import { ChildrenProps } from '@/models';

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
