import React, { ReactElement, useCallback, useMemo } from 'react';
import { Props } from './Building.types';
import { BuildingItem } from './BuildingItem';
import { EVENT_BUS_EVENTS } from '@/modules/Canvas/Game';
import './Building.scss';

export const Building = React.memo(
  ({ game, closeHandler }: Props): ReactElement => {
    const clickHandler = useCallback(
      (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = event.currentTarget as HTMLDivElement;
        const { name } = target.dataset;
        game.eventBus.emit(EVENT_BUS_EVENTS.ROOM_SELECTED, name);
        closeHandler();
      },
      [game, closeHandler]
    );

    const rooms = useMemo(() => {
      const keys = [...game.currentScene.availableBuildings.keys()];
      return keys.map((key) => {
        const room = game.currentScene.availableBuildings.get(key)!;
        return (
          <BuildingItem
            title={room.TITLE}
            name={room.NAME}
            price={room.PRICE}
            key={room.NAME}
            onClick={clickHandler}
          />
        );
      });
    }, [game, clickHandler]);

    return <div className="game-interface__building">{rooms}</div>;
  }
);
