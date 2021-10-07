import React, { ReactElement, memo } from 'react';
import { Props } from './UserAvatar.types';
import { Icon, ICONS } from '..';

export const UserAvatar = memo(
  ({ src = '', alt, className = '' }: Props): ReactElement => (
    <div className={`user__avatar ${className}`}>
      {src ? <img src={src} alt={alt} /> : <Icon name={ICONS.EmptyAvatar} />}
    </div>
  )
);
