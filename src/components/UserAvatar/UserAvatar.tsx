import React, { ReactElement, memo } from 'react';
import { Props } from './UserAvatar.types';
import { Icon, ICONS } from '..';
import './UserAvatar.scss';

export const UserAvatar = memo(
  ({ src = '', alt, className = '', onChange }: Props): ReactElement => (
    <div className={`user-avatar ${className}`}>
      {src ? <img src={src} alt={alt} /> : <Icon name={ICONS.EmptyAvatar} />}
      {onChange && (
        <>
          <label className="user-avatar__overlay" htmlFor="user-avatar-file">
            Change
          </label>
          <input
            type="file"
            name="avatar"
            accept="image/*"
            className="user-avatar__input"
            id="user-avatar-file"
            onChange={onChange}
          />
        </>
      )}
    </div>
  )
);
