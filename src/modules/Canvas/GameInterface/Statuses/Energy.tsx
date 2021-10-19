import React, { ReactElement } from 'react';
import energyIcon from '@/assets/gameInterface/Energy.png';
import { EnergyState } from '../../Game/Statuses.types';

type Props = {
  energyState: EnergyState;
};

export const Energy = React.memo(({ energyState }: Props): ReactElement => {
  const energyClass =
    energyState.spend > 0
      ? 'energy__status-change_green'
      : 'energy__status-change_red';

  return (
    <section className="game-statuses__item">
      <img
        src={energyIcon}
        alt="drone"
        className="game-statuses__item-img game-statuses__item-img_energy"
      />
      <div className="game-statuses__item-info energy__status">
        {energyState.energy}
      </div>
      <div className="game-statuses__item-info energy__status-info">
        <div className={`energy__status-change ${energyClass}`}>
          {energyState.spend}
        </div>
        <div className="energy__status-change">{energyState.block}</div>
      </div>
    </section>
  );
});
