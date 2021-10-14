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
import { GameInfo, GameInterface } from './GameInterface';
import { BASE_INFO_STATE, EVENT_BUS_EVENTS, Game, UpdateInfo } from './Game';
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
  const { form: info, changeSeveral: updateInfo } =
    useForm<GameInfo>(BASE_INFO_STATE);

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
  }, [canvasRef, savedState, isLoaded, game]);

  const restartHandler = () => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        const localGame = new Game(
          canvasRef.current,
          context,
          undefined,
          updateInfo as UpdateInfo
        );
        updateInfo(BASE_INFO_STATE);
        setGame(localGame);
      }
    }
  };

  const clickHandler = useCallback(
    (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
      if (game) {
        game?.eventBus.emit(EVENT_BUS_EVENTS.MOUSE_CLICK, event);
      }
    },
    [game]
  );

  const keyDownHandler = (event: KeyboardEvent) =>
    game?.eventBus.emit(EVENT_BUS_EVENTS.KEY_DOWN, event);

  const keyUpHandler = (event: KeyboardEvent) =>
    game?.eventBus.emit(EVENT_BUS_EVENTS.KEY_UP, event);

  const keyPressHandler = (event: KeyboardEvent) =>
    game?.eventBus.emit(EVENT_BUS_EVENTS.KEY_PRESS, event);

  useEffect(() => {
    if (game && isLoaded) {
      document.addEventListener('keydown', keyDownHandler);
      document.addEventListener('keyup', keyUpHandler);
      document.addEventListener('keypress', keyPressHandler);
    }

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
      document.removeEventListener('keyup', keyUpHandler);
      document.removeEventListener('keypress', keyPressHandler);
    };
  }, [game, isLoaded]);

  return (
    <div className="canvas__container">
      <div className="game__wrapper">
        <GameInterface game={game} info={info} restart={restartHandler} />
        <GameCanvas canvasRef={canvasRef} onClick={clickHandler} />
      </div>
    </div>
  );
});
