import React, {
  ReactElement,
  MutableRefObject,
  useContext,
  useEffect,
  useRef,
} from 'react';
import { GameContext } from '../const';
import { draw } from '../Game';
import './GameCanvas.scss';

export const GameCanvas = React.memo((): ReactElement => {
  const { isStarted, game } = useContext(GameContext);
  const canvasRef: MutableRefObject<null | HTMLCanvasElement> = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    let animationFrameId: number | null = null;
    let frame = 0;
    game.init();
    if (canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        const animate = () => {
          if (frame === 60) {
            frame = 0;
          } else {
            frame += 1;
          }

          draw(context, canvas, game);
          animationFrameId = requestAnimationFrame(animate);
        };
        animate();
      }
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isStarted, game]);

  return <canvas ref={canvasRef} className="game__canvas" />;
});
