import { FC, ReactElement } from 'react';
import ReactDOM from 'react-dom';

export const Portal: FC = ({ children }): ReactElement => {
  return ReactDOM.createPortal(children, document.querySelector('body')!);
};
