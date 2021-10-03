import React, { memo, ReactElement } from 'react';
import { Header } from '@/components';
import { FORUM_NAV } from './const';
import { ForumActionsIcon } from '@/components/Icons/SVG/ForumActions';
import { HeaderProps } from './Forum.types';

export const ForumHeader = memo(
  ({ toggleFunction }: HeaderProps): ReactElement => (
    <Header navItems={FORUM_NAV}>
      <div className="forum-nav-actions" onClick={toggleFunction}>
        <ForumActionsIcon />
      </div>
    </Header>
  )
);
