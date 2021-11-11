import React, { ReactElement } from 'react';
import timeIcon from '@/assets/gameInterface/Time.png';
import { ExplorationInfo } from '../../Game/Statuses.types';

type Props = {
  explorationInfo: ExplorationInfo;
};

export const ExplorationTime = React.memo(({ explorationInfo }: Props): ReactElement => {

  return (
    <section className="game-statuses__item">
      <img
        src={timeIcon}
        alt="time"
        className="game-statuses__item-img game-statuses__item-img_time"
      />
      <div className="game-statuses__item-info energy__status">
        {explorationInfo.time}
      </div>
      <div className="game-statuses__item-info energy__status-info">
        <div className="energy__status-change energy__status-change_red">
          {-1}
        </div>
        {/* <div className="energy__status-change">{energyState.block}</div> */}
      </div>
    </section>
  );
});
