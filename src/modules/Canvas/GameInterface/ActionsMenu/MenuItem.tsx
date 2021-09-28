import React, { ReactElement } from 'react';
import { MenuItemProps } from './ActionsMenu.types';

export const MenuItem = React.memo(
  ({ select, title, name }: MenuItemProps): ReactElement => (
    <div onClick={select as any} data-name={name}>
      {title}
    </div>
  )
);
