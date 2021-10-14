import { Game, RoomPrice } from '@/modules/Canvas/Game';

export type Props = {
  game: Game;
  closeHandler: () => void;
};

export type BuildingItemProps = {
  title: string;
  name: string;
  price: RoomPrice;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
