import React, { ReactElement, useEffect, useMemo, useState } from 'react';
import { MENU_OPTIONS } from './const';
import { MenuItem } from './MenuItem';
import { Props } from './ActionsMenu.types';
import { Building } from './Building';
import { ActiveMenu } from './ActiveMenu';
import buildIcon from '@/assets/gameInterface/Build.png';
import explorationIcon from '@/assets/gameInterface/Exploration.png';
import { EVENT_BUS_EVENTS } from '../../Game';
import './ActionsMenu.scss';
import { Exploration } from '../../Game/Scenes/Exploration';
import { explorationSetup } from '../../Game/const';

export const ActionsMenu = React.memo(({ game }: Props): ReactElement => {
  const [selectedMenu, selectMenu] = useState<MENU_OPTIONS | null>(null);

  const closeHandler = () => selectMenu(null);

  const selectHandler = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | undefined,
    option?: MENU_OPTIONS
  ) => {
    if (!event && option) {
      selectMenu(option);
    } else if (event) {
      const target = event.target as HTMLDivElement;
      const { name } = target.dataset;
      selectMenu(name as MENU_OPTIONS);
    }
  };

  const explorationSceneHandler = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | undefined,
    option?: MENU_OPTIONS
  ) => {
    // TODO fix energy prize
    game.currentScene = new Exploration(game, explorationSetup, game.currentScene, 30);
  };

  const openMenu = useMemo(() => {
    switch (selectedMenu) {
      case MENU_OPTIONS.BUILDING:
        return <Building game={game} closeHandler={closeHandler} />;
      case MENU_OPTIONS.EXPLORATION:
        return <></>
      default:
        return null;
    }
  }, [selectedMenu, game]);

  const selectBuildMenu = () => {
    selectHandler(undefined, MENU_OPTIONS.BUILDING);
  };

  useEffect(() => {
    if (game) {
      game.eventBus.on(EVENT_BUS_EVENTS.OPEN_BUILD_MENU, selectBuildMenu);
    }
  }, [game]);

  return (
    <>
      <div className="game-interface__actions-menu">
        <MenuItem
          alt="build"
          name={MENU_OPTIONS.BUILDING}
          select={selectHandler}
          icon={buildIcon}
        />
        <MenuItem
          alt="exploration"
          name={MENU_OPTIONS.EXPLORATION}
          select={explorationSceneHandler}
          icon={explorationIcon}
        />
      </div>

      {openMenu && <ActiveMenu onClose={closeHandler}>{openMenu}</ActiveMenu>}
    </>
  );
});
