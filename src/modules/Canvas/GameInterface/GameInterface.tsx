import React, { ReactElement, useEffect } from 'react';
import { Props } from './GameInterface.types';
import { useBoolean } from '@/utils';
import { PauseBar } from './PauseBar';
import { Status } from './Status';
import { ActionsMenu } from './ActionsMenu';
import './GameInterface.scss';

export const GameInterface = React.memo(
  ({ game, gameInfo }: Props): ReactElement => {
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
        {!isPaused && <Status day={gameInfo.day} />}
        <PauseBar isPaused={isPaused} togglePause={togglePause} />
        {!isPaused && game && <ActionsMenu game={game} />}
      </>
    );
  }
);
