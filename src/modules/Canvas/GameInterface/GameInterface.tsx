import React, { ReactElement, useEffect } from 'react';
import { Props } from './GameInterface.types';
import { useBoolean } from '@/utils';
import { ActionsMenu } from './ActionsMenu';
import { GameControl } from './GameControl';
import { Statuses } from './Statuses';
import { GameOver } from './GameOver';
import './GameInterface.scss';

export const GameInterface = React.memo(
  ({ game, info, restart }: Props): ReactElement => {
    const [isPaused, togglePause] = useBoolean(false);

    useEffect(() => {
      if (game && game.animationFrameId && isPaused) {
        game.cancelAnimation();
      } else if (game && !isPaused) {
        game.run();
      }
    }, [isPaused, game]);

    useEffect(() => {
      if (game && info.isGameOver) {
        game.cancelAnimation();
      }
    }, [game, info.isGameOver]);

    return (
      <>
        <GameControl
          day={info.day}
          isPaused={isPaused}
          togglePause={togglePause}
        />

        <Statuses info={info} />

        {!isPaused && game && <ActionsMenu game={game} />}
        {info.isGameOver && <GameOver restart={restart} />}
      </>
    );
  }
);
