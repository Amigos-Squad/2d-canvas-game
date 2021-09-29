import React, {
  MutableRefObject,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import { GameCanvas } from './GameCanvas';
import { GameInterface } from './GameInterface';
import { Game } from './Game';
import './Canvas.scss';

export const Canvas = React.memo((): ReactElement => {
  const [game, setGame] = useState<Game | null>(null);
  const canvasRef: MutableRefObject<null | HTMLCanvasElement> = useRef(null);

  useEffect(() => {
    if (canvasRef && canvasRef.current && !game) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        setGame(new Game(canvasRef.current, context));
      }
    }
  }, [canvasRef, game]);

  return (
    <div className="canvas__container">
      <div className="game__wrapper">
        <GameInterface game={game} />
        <GameCanvas canvasRef={canvasRef} />
      </div>
    </div>
  );
});
