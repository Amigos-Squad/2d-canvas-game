import React, { FC, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { isServer } from '@/utils';

export const Portal: FC = ({ children }): ReactElement => {
  return !isServer ? (
    ReactDOM.createPortal(children, document.querySelector('body')!)
  ) : (
    <> </>
  );
};
