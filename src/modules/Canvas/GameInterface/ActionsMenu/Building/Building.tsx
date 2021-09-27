import React, { ReactElement, useCallback, useMemo } from 'react';
import { Props } from './Building.types';
import { BuildingItem } from './BuildingItem';
import './Building.scss';

export const Building = React.memo(
  ({ game, closeHandler }: Props): ReactElement => {
    const clickHandler = useCallback(
      (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = event.target as HTMLDivElement;
        const { name } = target.dataset;
        game.currentScene.setBuilding(name);
        closeHandler();
      },
      [game, closeHandler]
    );

    const rooms = useMemo(
      () =>
        Object.entries(game.statuses.building).map(([key, room]) => (
          <BuildingItem title={key} key={room.key} onClick={clickHandler} />
        )),
      [game, clickHandler]
    );

    return <div className="game-interface__building">{rooms}</div>;
  }
);
