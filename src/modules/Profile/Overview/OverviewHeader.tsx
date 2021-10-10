import React, { memo, ReactElement } from 'react';
import { Header, UserAvatar } from '@/components';
import { HeaderProps } from './Overview.types';

export const OverviewHeader = memo(
  ({
    avatar,
    displayName = '',
    login = '',
    score = 4004,
    onAvatarChange,
  }: HeaderProps): ReactElement => (
    <Header className="overview-header">
      <div className="overview-header__container">
        <div className="overview-header__info">
          <UserAvatar src={avatar} alt="user name" onChange={onAvatarChange} />
          <div className="overview-header__title">{displayName || login}</div>
        </div>

        <div className="header-score">
          <div className="header-score__title">{score}</div>
          <div className="header-score__info">max score</div>
        </div>
      </div>
    </Header>
  )
);
