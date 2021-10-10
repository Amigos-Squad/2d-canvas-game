import React, { ReactElement } from 'react';
import { DronInfo } from './DronInfo';
import './Status.scss';

export const Status = React.memo(
  (): ReactElement => (
    <section className="game-statuses">
      <DronInfo />
    </section>
  )
);
