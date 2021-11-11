import React, { ReactElement } from 'react';
import hpIcon from '@/assets/gameInterface/HP.png';
import { ExplorationInfo } from '../../Game/Statuses.types';

type Props = {
  explorationInfo: ExplorationInfo;
};

export const ExplorationHP = React.memo(({ explorationInfo }: Props): ReactElement => {

  return (
    <section className="game-statuses__item">
      <img
        src={hpIcon}
        alt="hp"
        className="game-statuses__item-img game-statuses__item-img_hp"
      />
      <div className="game-statuses__item-info energy__status">
        {explorationInfo.hp}
      </div>
      {/* <div className="game-statuses__item-info energy__status-info">
        <div className={`energy__status-change ${energyClass}`}>
          {energyState.spend}
        </div>
        <div className="energy__status-change">{energyState.block}</div>
      </div> */}
    </section>
  );
});
