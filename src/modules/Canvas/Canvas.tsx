import React, {
  MutableRefObject,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { GameCanvas } from './GameCanvas';
import { GameInterface } from './GameInterface';
import { GAME_CONST, Game } from './Game';
import './Canvas.scss';

export const Canvas = React.memo((): ReactElement => {
  const canvasRef: MutableRefObject<null | HTMLCanvasElement> = useRef(null);
  const [game, setGame] = useState<Game | null>(null);
  const [day, setCurrentDay] = useState(1);
  const [citizensCount, setCitizens] = useState(GAME_CONST.START_CITIZEN.COUNT);

  useEffect(() => {
    if (canvasRef && canvasRef.current && !game) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        setGame(new Game(canvasRef.current, context));
      }
    }
  }, [canvasRef, game]);

  useEffect(() => {
    if (game && !game.isLoaded) {
      game.load({ setCurrentDay, setCitizens });
    }
  }, [game]);

  const gameInfo = useMemo(
    () => ({
      citizensCount,
      day,
    }),
    [day, citizensCount]
  );

  const clickHandler = useCallback(
    (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
      if (game) {
        game.currentScene.click(event);
      }
    },
    [game]
  );

  return (
    <div className="canvas__container">
      <div className="game__wrapper">
        <GameInterface game={game} gameInfo={gameInfo} />
        <GameCanvas canvasRef={canvasRef} onClick={clickHandler} />
      </div>
    </div>
  );
});
