import React, {
  ReactElement,
  MutableRefObject,
  useContext,
  useEffect,
  useRef,
} from 'react';
import { GameContext } from '../const';
import { Game } from './Game/Game';
import { draw } from './Game/GameLoop';
import './GameCanvas.scss';

export const GameCanvas = React.memo((): ReactElement => {
  const { isStarted } = useContext(GameContext);
  const canvasRef: MutableRefObject<null | HTMLCanvasElement> = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    let animationFrameId: number | null = null;

    if (isStarted && canvas) {
      const context = canvas.getContext('2d');
      const game = new Game();

      if (context) {
        const render = () => {
          draw(context, canvas, game);
          animationFrameId = requestAnimationFrame(render);
        };
        render();
      }
    } else if (!isStarted && animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isStarted]);

  return <canvas ref={canvasRef} className="game__canvas" />;
});
