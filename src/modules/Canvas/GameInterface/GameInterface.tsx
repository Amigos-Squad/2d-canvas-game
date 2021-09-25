import React, { ReactElement, useEffect, useState } from 'react';
import { Props } from './GameInterface.types';
import { useBoolean } from '@/utils';
import { PauseBar } from './PauseBar';
import { Status } from './Status';
import { GameOver } from './GameOver/GameOver';
import './GameInterface.scss';

export const GameInterface = React.memo(({ game }: Props): ReactElement => {
  const [isPaused, togglePause] = useBoolean(false);
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
  }, [isGameOver, citizensCount, game, toggleGameOver]);

  const restartHandler = () => ({});

  return (
    <>
      {!isPaused && game && <Status citizensCount={citizensCount} day={day} />}
      <PauseBar isPaused={isPaused} togglePause={togglePause} />
      {isGameOver && <GameOver restart={restartHandler} />}
    </>
  );
});
