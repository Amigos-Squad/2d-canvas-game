import React, { ReactElement } from 'react';
import { Props } from './Status.types';
import './Status.scss';

export const Status = React.memo(
  ({ citizensCount, day }: Props): ReactElement => (
    <div className="game-interface__statuses">
      <div className="game-interface__statuses-day">{`Day: ${day}`}</div>
      <div className="game-interface__statuses-citizens">{`Citizens: ${citizensCount}`}</div>
    </div>
  )
);
