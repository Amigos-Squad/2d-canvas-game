import React, { ReactElement } from 'react';
import { GameInfo } from '..';
import { DronInfo } from './DronInfo';
import { Energy } from './Energy';
import { ExplorationTime } from './ExolorationTime';
import { ExplorationHP } from './ExplorationHP';
import './Statuses.scss';

type Props = {
  info: GameInfo;
};

export const Statuses = React.memo(
  ({ info }: Props): ReactElement => (
    <section className="game-statuses">
      {info.explorationInfo && <ExplorationTime explorationInfo={info.explorationInfo} />}
      {info.explorationInfo && <ExplorationHP explorationInfo={info.explorationInfo} />}
      <Energy energyState={info.energyState} />
      <DronInfo drones={info.drones} />
    </section>
  )
);
