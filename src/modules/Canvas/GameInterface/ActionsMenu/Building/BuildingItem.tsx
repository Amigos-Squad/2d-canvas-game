import React, { ReactElement } from 'react';
import { BuildingItemProps } from './Building.types';
import noImage from '@/assets/no-image.png';
import { Price } from './Price';

export const BuildingItem = React.memo(
  ({
    title,
    name,
    price,
    image = noImage,
    onClick,
  }: BuildingItemProps): ReactElement => (
    <div className="building-option" onClick={onClick} data-name={name}>
      <div className="building-option__title">{title}</div>
      <div className="building-option__img">
        <img src={image} alt="room" />
      </div>
      <Price price={price} />
    </div>
  )
);
