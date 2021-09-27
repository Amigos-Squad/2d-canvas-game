import { Game } from '@/modules/Canvas/Game';

export type Props = {
  game: Game;
  closeHandler: () => void;
};

export type BuildingItemProps = {
  title: string;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
