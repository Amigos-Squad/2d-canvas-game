import React, { ReactElement } from 'react';
import './GameOver.scss';
import { Props } from './GameOver.types';

export const GameOver = ({ restart }: Props): ReactElement => (
  <section className="game-over">
    <div className="game-over__content">
      <span>GAME OVER</span>
      <span>RESTART</span>
    </div>
  </section>
);
