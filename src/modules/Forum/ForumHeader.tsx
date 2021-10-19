import React, { ReactElement, memo } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { Header, Icon, ICONS } from '@/components';
import { ROUTES } from '@/utils';
import { FORUM_NAV } from './const';

export const ForumHeader = memo((): ReactElement => {
  const isTopics = useRouteMatch(ROUTES.FORUM);
  const isTopic = useRouteMatch(ROUTES.FORUM_TOPIC);
  const isCreateArea = isTopics?.isExact || isTopic?.isExact;

  const lickPath =
    isTopic && isTopic.isExact ? `${isTopic.url}/new` : ROUTES.FORUM_NEW_TOPIC;

  return (
    <Header navItems={FORUM_NAV}>
      <div className="forum__header-actions">
        {isCreateArea && (
          <NavLink to={lickPath}>
            <Icon name={ICONS.EnvelopeAdd} />
          </NavLink>
        )}
      </div>
    </Header>
  );
});
