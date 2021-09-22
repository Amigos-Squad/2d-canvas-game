import React, { ReactElement } from 'react';
import './GameOver.scss';
import { Props } from './GameOver.types';

export const GameOver = ({ restart }: Props): ReactElement => (
  <div
    className="game-interface__game-over"
    onClick={restart}
    aria-hidden="true"
  >
    <div>GAME OVER</div>
    <div>RESTART</div>
  </div>
);
