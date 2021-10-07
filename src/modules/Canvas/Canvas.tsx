import React, {
  MutableRefObject,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GameCanvas } from './GameCanvas';
import { GameInterface } from './GameInterface';
import { Game, UpdateInfo } from './Game';
import type { Store } from '@/redux/store.type';
import { setSavedGame } from '@/redux';
import { useForm } from '@/utils';
import './Canvas.scss';

export const Canvas = React.memo((): ReactElement => {
  const dispatch = useDispatch();
  const { savedState, isLoaded } = useSelector(
    (store: Store) => store
  ).savedGame;

  const canvasRef: MutableRefObject<null | HTMLCanvasElement> = useRef(null);
  const [game, setGame] = useState<Game | null>(null);
  const { form: info, onChange: updateInfo } = useForm({
    day: 1,
  });

  useEffect(() => {
    /* temp request */
    dispatch(setSavedGame(undefined));
  }, [dispatch]);

  useEffect(() => {
    if (isLoaded && canvasRef && canvasRef.current && !game) {
      const context = canvasRef.current.getContext('2d');

      if (context) {
        const localGame = new Game(
          canvasRef.current,
          context,
          savedState,
          updateInfo as UpdateInfo
        );
        setGame(localGame);
      }
    }
  }, [canvasRef, savedState, updateInfo, isLoaded, game]);

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
        <GameInterface game={game} info={info} />
        <GameCanvas canvasRef={canvasRef} onClick={clickHandler} />
      </div>
    </div>
  );
});
