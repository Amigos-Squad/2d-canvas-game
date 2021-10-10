import React, { ReactElement } from 'react';

export const Pause = React.memo(
  (): ReactElement => (
    <svg width="15" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="5" height="20" fill="white" />
      <rect x="10" width="5" height="20" fill="white" />
    </svg>
  )
);
