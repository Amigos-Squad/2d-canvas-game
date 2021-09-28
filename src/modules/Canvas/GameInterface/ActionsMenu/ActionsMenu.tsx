import React, { ReactElement, useMemo, useState } from 'react';
import { MENU_OPTIONS } from './const';
import { MenuItem } from './MenuItem';
import { Props } from './ActionsMenu.types';
import './ActionsMenu.scss';
import { Building } from './Building';
import { ActiveMenu } from './ActiveMenu';

export const ActionsMenu = React.memo(({ game }: Props): ReactElement => {
  const [selectedMenu, selectMenu] = useState<MENU_OPTIONS | null>(null);

  const selectHandler = (event: any) => {
    const { name } = event.target.dataset;
    selectMenu(name);
    console.warn(game);
  };

  const closeHandler = () => selectMenu(null);

  const openMenu = useMemo(() => {
    switch (selectedMenu) {
      case MENU_OPTIONS.BUILDING:
        return <Building />;
      default:
        return null;
    }
  }, [selectedMenu]);

  return (
    <>
      <div className="game-interface__actions-menu">
        <MenuItem
          name={MENU_OPTIONS.BUILDING}
          select={selectHandler}
          title="BUILDING"
        />
      </div>

      {openMenu && <ActiveMenu onClose={closeHandler}>{openMenu}</ActiveMenu>}
    </>
  );
});
