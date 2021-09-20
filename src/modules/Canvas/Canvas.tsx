import React, { ReactElement, useMemo } from 'react';
import { useBoolean } from '@/utils';
import { GameCanvas } from './GameCanvas';
import { GameInterface } from './GameInterface';
import { context, GameContext } from './const';
import './Canvas.scss';

export const Canvas = React.memo((): ReactElement => {
  const [isStarted] = useBoolean(true);

  const usedContext = useMemo(() => ({ ...context, isStarted }), [isStarted]);

  return (
    <div className="canvas__container">
      <GameContext.Provider value={usedContext}>
        <div className="game__wrapper">
          <GameInterface />
          <GameCanvas />
        </div>
      </GameContext.Provider>
    </div>
  );
});
