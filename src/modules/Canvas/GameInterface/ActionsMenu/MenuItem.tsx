import React, { ReactElement } from 'react';
import { MenuItemProps } from './ActionsMenu.types';

export const MenuItem = React.memo(
  ({ select, icon, name, alt }: MenuItemProps): ReactElement => (
    <div onClick={select} data-name={name} className="actions-menu__item">
      <img
        src={icon}
        alt={alt}
        data-name={name}
        className="actions-menu__item-img"
      />
    </div>
  )
);
