import React, { ReactElement, useMemo } from 'react';
import { useBoolean } from '@/utils';
import { GameCanvas } from './GameCanvas';
import { GameInterface } from './GameInterface';
import { GameContext } from './const';
import './Canvas.scss';
import { Game } from './Game';

const game = new Game();

export const Canvas = React.memo((): ReactElement => {
  const [isStarted] = useBoolean(true);

  const usedContext = useMemo(() => {
    const ctx = { game, isStarted };
    return ctx;
  }, [isStarted]);

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
