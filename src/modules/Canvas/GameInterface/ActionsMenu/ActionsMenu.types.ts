import { ReactElement } from 'react';
import { Game } from '../../Game';

export type Props = {
  game: Game;
};

export type MenuItemProps = {
  select: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  name: string;
  icon: string;
  alt: string;
};

export type ActiveMenuProps = {
  children: ReactElement;
  onClose: () => void;
};

export type ActionModalProps = {
  game: Game;
  closeHandler: () => void;
};
