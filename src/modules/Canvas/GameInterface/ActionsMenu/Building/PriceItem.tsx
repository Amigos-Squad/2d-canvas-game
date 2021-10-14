import React, { ReactElement } from 'react';

interface Props {
  src: string;
  title: number;
}

export const PriceItem = ({ src, title }: Props): ReactElement => (
  <div className="price-item">
    <img src={src} alt="energy" className="price-item__img" />
    <div className="price-item__title">{title}</div>
  </div>
);
