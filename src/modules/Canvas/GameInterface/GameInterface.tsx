import React, { ReactElement, useEffect, useState } from 'react';
import { Props } from './GameInterface.types';
import { useBoolean } from '@/utils';
import { PauseBar } from './PauseBar';
import { Status } from './Status';
import './GameInterface.scss';
import { GameOver } from './GameOver/GameOver';

export const GameInterface = React.memo(({ game }: Props): ReactElement => {
  const [isPaused, togglePause] = useBoolean(true);
  const [isGameOver, toggleGameOver] = useBoolean(false);

  const [day, setCurrentDay] = useState(1);
  const [citizensCount, setCitizens] = useState(2);

  useEffect(() => {
    if (game && !game.isLoaded) {
      game.load({ setCurrentDay, setCitizens });
    }
  }, [game]);

  useEffect(() => {
    if (game && game.animationFrameId && isPaused) {
      game.cancelAnimation();
    } else if (game && !isPaused) {
      game.run();
    }
  }, [isPaused, game]);

  useEffect(() => {
    if (!isGameOver && citizensCount === 0 && game) {
      game.cancelAnimation();
      toggleGameOver();
    }
  }, [citizensCount, game, toggleGameOver]);

  const restartHandler = () => ({});

  return (
    <>
      {game && <Status citizensCount={citizensCount} day={day} />}
      <PauseBar isPaused={isPaused} togglePause={togglePause} />
      {isGameOver && <GameOver restart={restartHandler} />}
    </>
  );
});
