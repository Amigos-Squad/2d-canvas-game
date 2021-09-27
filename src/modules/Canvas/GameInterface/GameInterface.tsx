import React, { ReactElement, useEffect } from 'react';
import { Props } from './GameInterface.types';
import { useBoolean } from '@/utils';
import { PauseBar } from './PauseBar';
import { Status } from './Status';
import { GameOver } from './GameOver';
import { ActionsMenu } from './ActionsMenu';
import './GameInterface.scss';

export const GameInterface = React.memo(
  ({ game, gameInfo }: Props): ReactElement => {
    const [isPaused, togglePause] = useBoolean(false);
    const [isGameOver, toggleGameOver] = useBoolean(false);

    useEffect(() => {
      if (game && game.animationFrameId && isPaused) {
        game.cancelAnimation();
      } else if (game && !isPaused) {
        game.run();
      }
    }, [isPaused, game]);

    useEffect(() => {
      if (!isGameOver && gameInfo.citizensCount === 0 && game) {
        game.cancelAnimation();
        toggleGameOver();
      }
    }, [isGameOver, gameInfo, game, toggleGameOver]);

    const restartHandler = () => ({});

    return (
      <>
        {!isPaused && (
          <Status citizensCount={gameInfo.citizensCount} day={gameInfo.day} />
        )}
        <PauseBar isPaused={isPaused} togglePause={togglePause} />
        {!isPaused && game && <ActionsMenu game={game} />}
        {isGameOver && <GameOver restart={restartHandler} />}
      </>
    );
  }
);
