import React, { ReactElement } from 'react';
import { Props } from './PauseBar.types';
import './PauseBar.scss';

export const PauseBar = React.memo(
  ({ togglePause, isPaused }: Props): ReactElement => (
    <div
      className={`game-interface__pause${
        isPaused ? ' game-interface__pause_active' : ''
      }`}
    >
      <div aria-hidden="true" onClick={togglePause}>
        {isPaused ? 'PLAY' : 'PAUSE'}
      </div>
    </div>
  )
);
