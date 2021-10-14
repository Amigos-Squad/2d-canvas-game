import React, { ReactElement, useMemo } from 'react';
import { RoomPrice } from '@/modules/Canvas/Game';
import energy from '@/assets/gameInterface/Energy.png';
import { PriceItem } from './PriceItem';

interface Props {
  price: RoomPrice;
}

export const Price = ({ price }: Props): ReactElement => {
  const priceView = useMemo(() => {
    if (price.STATIC_ENERGY) {
      return <PriceItem src={energy} title={price.STATIC_ENERGY} />;
    }

    return <></>;
  }, [price]);

  return <div className="building-option__price">{priceView}</div>;
};
