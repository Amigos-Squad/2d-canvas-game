import { ReactElement } from 'react';
import { Game } from '../../Game';

export type Props = {
  game: Game;
};

export type MenuItemProps = {
  select: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  name: string;
  title: string;
};

export type ActiveMenuProps = {
  children: ReactElement;
  onClose: () => void;
};
