import React, { ReactElement } from 'react';
import { GameInfo } from '..';
import { DronInfo } from './DronInfo';
import { Energy } from './Energy';
import './Statuses.scss';

type Props = {
  info: GameInfo;
};

export const Statuses = React.memo(
  ({ info }: Props): ReactElement => (
    <section className="game-statuses">
      <Energy energyState={info.energyState} />
      <DronInfo drones={info.drones} />
    </section>
  )
);
