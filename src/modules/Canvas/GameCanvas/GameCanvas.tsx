import React, { ReactElement } from 'react';
import './GameCanvas.scss';
import { Props } from './GameCanvas.types';

export const GameCanvas = React.memo(
  ({ canvasRef }: Props): ReactElement => (
    <canvas ref={canvasRef} className="game__canvas" />
  )
);
