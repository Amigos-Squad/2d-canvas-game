import React, { ReactElement, memo, useMemo } from 'react';
import { Props } from './Button.types';
import { BUTTON_TYPES } from './const';
import './Button.scss';

export const Button = memo(
  ({
    children,
    type,
    onClick,
    buttonType = BUTTON_TYPES.PRIMARY,
  }: Props): ReactElement => {
    const className = useMemo(
      () => `button button_${buttonType}`,
      [buttonType]
    );

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
