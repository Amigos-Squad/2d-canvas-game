import { ErrorInfo, ReactNode } from 'react';
import { RouteComponentProps } from 'react-router-dom';

export type State = {
  hasError: boolean;
};

export type Props = {
  children: ReactNode;
  errorComponent?: ReactNode;
  handler?: (error: Error, errorInfo: ErrorInfo) => void;
} & RouteComponentProps;
