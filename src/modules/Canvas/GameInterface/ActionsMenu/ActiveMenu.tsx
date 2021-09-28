import React, { ReactElement } from 'react';
import { Icon, ICONS } from '@/components';
import { ActiveMenuProps } from './ActionsMenu.types';

export const ActiveMenu = ({
  children,
  onClose,
}: ActiveMenuProps): ReactElement => (
  <section className="game-interface__menu-wrapper">
    <div className="game-interface__active-menu">
      <header className="game-interface__menu-header">
        <Icon name={ICONS.Close} onClick={onClose} />
      </header>
      {children}
    </div>
  </section>
);
