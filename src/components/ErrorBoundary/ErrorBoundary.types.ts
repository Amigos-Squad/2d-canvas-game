import { ReactNode } from 'react';
import { RouteComponentProps } from 'react-router';

export type State = {
  hasError: boolean;
};

export type Props = {
  children: ReactNode;
} & RouteComponentProps;
