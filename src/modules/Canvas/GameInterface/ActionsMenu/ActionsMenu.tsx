import React, { ReactElement, useMemo, useState } from 'react';
import { MENU_OPTIONS } from './const';
import { MenuItem } from './MenuItem';
import { Props } from './ActionsMenu.types';
import { Building } from './Building';
import { ActiveMenu } from './ActiveMenu';
import buildIcon from '@/assets/gameInterface/Build.png';
import './ActionsMenu.scss';

export const ActionsMenu = React.memo(({ game }: Props): ReactElement => {
  const [selectedMenu, selectMenu] = useState<MENU_OPTIONS | null>(null);

  const selectHandler = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = event.target as HTMLDivElement;
    const { name } = target.dataset;
    selectMenu(name as MENU_OPTIONS);
  };

  const closeHandler = () => selectMenu(null);

  const openMenu = useMemo(() => {
    switch (selectedMenu) {
      case MENU_OPTIONS.BUILDING:
        return <Building game={game} closeHandler={closeHandler} />;
      default:
        return null;
    }
  }, [selectedMenu, game]);

  return (
    <>
      <div className="game-interface__actions-menu">
        <MenuItem
          alt="build"
          name={MENU_OPTIONS.BUILDING}
          select={selectHandler}
          icon={buildIcon}
        />
      </div>

      {openMenu && <ActiveMenu onClose={closeHandler}>{openMenu}</ActiveMenu>}
    </>
  );
});
