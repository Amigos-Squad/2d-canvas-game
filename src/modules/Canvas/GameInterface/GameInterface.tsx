import React, { ReactElement, useContext, useEffect } from 'react';
import { GameContext } from '../const';
import './GameInterface.scss';

export const GameInterface = React.memo((): ReactElement => {
  const { isStarted } = useContext(GameContext);

  useEffect(() => {}, [isStarted]);

  return (
    <div className="game__interface">
      <></>
    </div>
  );
});
