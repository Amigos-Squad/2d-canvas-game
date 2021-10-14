import React, { ReactElement } from 'react';
import { Props } from './Statuses.types';
import drone from '@/assets/gameInterface/Drone.png';

export const DronInfo = React.memo(
  ({ drones = { free: 2, total: 2 } }: Props): ReactElement => (
    <div className="game-statuses__item">
      <img src={drone} alt="drone" className="game-statuses__item-img" />
      <div className="game-statuses__item-info">
        <div className="game-statuses__item-info_free">{drones.free}</div>
        <div>/</div>
        <div className="game-statuses__item-info_total">{drones.total}</div>
      </div>
    </div>
  )
);
