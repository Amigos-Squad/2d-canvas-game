import React, { ReactElement } from 'react';
import { Props } from './Status.types';
import drone from '@/assets/gameInterface/Drone.png';
import './Status.scss';

export const DronInfo = React.memo(
  ({ drones = { free: 2, total: 2 } }: Props): ReactElement => (
    <div className="game-statuses__dron">
      <img src={drone} alt="drone" className="game-statuses__dron-img" />
      <div className="game-statuses__dron-info">
        <div className="game-statuses__dron-info_free">{drones.free}</div>
        <div>/</div>
        <div className="game-statuses__dron-info_total">{drones.total}</div>
      </div>
    </div>
  )
);
