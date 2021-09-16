import React, { ReactElement, memo } from 'react';
import './Loader.scss';

export const Loader = memo(function (): ReactElement {
  return <div className="loader">loading</div>;
});
