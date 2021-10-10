import React, { ReactElement, useEffect } from 'react';
import { Props } from './GameInterface.types';
import { useBoolean } from '@/utils';
import { ActionsMenu } from './ActionsMenu';
import { GameControl } from './GameControl';
import './GameInterface.scss';
import { Status } from './Status';

export const GameInterface = React.memo(
  ({ game, info }: Props): ReactElement => {
    const [isPaused, togglePause] = useBoolean(false);

    useEffect(() => {
      if (game && game.animationFrameId && isPaused) {
        game.cancelAnimation();
      } else if (game && !isPaused) {
        game.run();
      }
    }, [isPaused, game]);

    return (
      <>
        <GameControl
          day={info.day}
          isPaused={isPaused}
          togglePause={togglePause}
        />

        <Status />

        {!isPaused && game && <ActionsMenu game={game} />}
      </>
    );
  }
);
