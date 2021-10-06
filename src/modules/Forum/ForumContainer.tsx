import React, { memo, ReactElement } from 'react';
import { Route, NavLink, useHistory } from 'react-router-dom';
import { ROUTES, useKeypress } from '@/utils';
import { tempTopics, Topics } from './Topics';
import { Header, Icon, ICONS, SwitchWithRedirect } from '@/components';
import { FORUM_NAV } from './const';
import { NewTopicForm } from './NewTopic';
import './Forum.scss';

export const ForumContainer = memo((): ReactElement => {
  const history = useHistory();

  const handleCancelForm = () => history.push(ROUTES.FORUM);

  useKeypress('Escape', handleCancelForm);

  return (
    <>
      <Header navItems={FORUM_NAV}>
        <div className="forum__header-actions">
          <NavLink to={ROUTES.FORUM_NEW_TOPIC}>
            <Icon name={ICONS.EnvelopeAdd} />
          </NavLink>
        </div>
      </Header>

      <SwitchWithRedirect>
        <Route exact path={ROUTES.FORUM}>
          <Topics topics={tempTopics} />
        </Route>

        <Route exact path={ROUTES.FORUM_NEW_TOPIC}>
          <Topics topics={tempTopics} />
          <NewTopicForm />
        </Route>

        <Route exact path={ROUTES.FORUM_FAVORITE}>
          <div>NOPE</div>
        </Route>

        <Route path={ROUTES.FORUM_TOPIC}>
          <div>123</div>
        </Route>
      </SwitchWithRedirect>
    </>
  );
});
