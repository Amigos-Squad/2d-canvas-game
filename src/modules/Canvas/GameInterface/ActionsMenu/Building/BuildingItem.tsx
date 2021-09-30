import React, { ReactElement } from 'react';
import { BuildingItemProps } from './Building.types';

export const BuildingItem = React.memo(
  ({ title, onClick }: BuildingItemProps): ReactElement => (
    <div
      className="game-interface__building-option"
      onClick={onClick}
      data-name={title}
    >
      {title}
    </div>
  )
);
