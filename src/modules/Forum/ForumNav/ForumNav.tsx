import React, { memo, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { ForumActionsIcon } from '@/components/Icons/SVG/ForumActions';
import { Props } from './ForumNav.types';

import './ForumNav.scss';

export const ForumNav = memo(
  (props: Props): ReactElement => (
    <div className="forum-nav">
      <div className="forum-nav-tabs">
        <NavLink to="/forum" className="forum-nav-tabs__item active">
          Topics
        </NavLink>
        <div className="forum-nav-tabs__item">Favorite</div>
      </div>
      <div className="forum-nav-actions" onClick={props.toggleFunction}>
        <ForumActionsIcon />
      </div>
    </div>
  )
);
