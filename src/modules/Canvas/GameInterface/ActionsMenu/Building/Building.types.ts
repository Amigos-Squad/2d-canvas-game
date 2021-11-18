import { RoomPrice } from '@/modules/Canvas/Game';

export type BuildingItemProps = {
  title: string;
  name: string;
  price: RoomPrice;
  image: string;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
