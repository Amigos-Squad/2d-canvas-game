import React, { ReactElement, memo } from 'react';
import block from 'bem-cn-lite';
import { Props } from './Button.types';
import './Button.scss';

export enum BUTTON_TYPES {
  PRIMARY = 'primary',
  TRANSPARENT = 'transparent',
}

const buttonClass = block('button');

export const Button = memo(
  ({
    children,
    type,
    onClick,
    buttonType = BUTTON_TYPES.PRIMARY,
  }: Props): ReactElement => {
    const className = buttonClass({ [buttonType]: true });

    const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      if (onClick) {
        onClick(event);
      }
    };

    return (
      <button type={type} className={className} onClick={clickHandler}>
        {children}
      </button>
    );
  }
);
