import { RoomPrice } from '@/modules/Canvas/Game';

export type BuildingItemProps = {
  title: string;
  name: string;
  price: RoomPrice;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
