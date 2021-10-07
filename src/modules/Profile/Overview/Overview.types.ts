import { ChildrenProps } from '@/models';

export type HeaderProps = {
  avatar?: string | null;
  title?: string;
  login: string;
  score?: number;
};

export type ColumnProps = {
  title: string;
  actions?: JSX.Element | JSX.Element[];
} & ChildrenProps;
