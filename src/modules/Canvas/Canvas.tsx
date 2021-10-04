import React, {
  MutableRefObject,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GameCanvas } from './GameCanvas';
import { GameInterface } from './GameInterface';
import { Game } from './Game';
import type { Store } from '@/redux/store.type';
import { setSavedGame } from '@/redux';
import './Canvas.scss';

export const Canvas = React.memo((): ReactElement => {
  const dispatch = useDispatch();
  const { savedState, isLoaded } = useSelector(
    (store: Store) => store
  ).savedGame;

  const canvasRef: MutableRefObject<null | HTMLCanvasElement> = useRef(null);
  const [game, setGame] = useState<Game | null>(null);
  const [day, setCurrentDay] = useState(1);

  useEffect(() => {
    if (canvasRef && canvasRef.current && !game) {
      const context = canvasRef.current.getContext('2d');

      if (context) {
        setGame(new Game(canvasRef.current, context));
        /* temp request */
        dispatch(setSavedGame(null));
      }
    }
  }, [canvasRef, game, dispatch]);

  useEffect(() => {
    if (isLoaded && game && !game.isLoaded) {
      game.load({ setCurrentDay }, savedState);
    }
  }, [game, savedState, isLoaded]);

  const gameInfo = useMemo(
    () => ({
      day,
    }),
    [day]
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
