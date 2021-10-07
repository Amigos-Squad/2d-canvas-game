import React, { memo, ReactElement } from 'react';
import { Route, useHistory, useLocation } from 'react-router-dom';
import { ROUTES, useKeypress } from '@/utils';
import { tempTopics, Topics } from './Topics';
import { SwitchWithRedirect } from '@/components';
import { NewTopicForm } from './NewTopic';
import { Topic } from './Topic';
import './Forum.scss';
import { ForumHeader } from './ForumHeader';

export const ForumContainer = memo((): ReactElement => {
  const history = useHistory();
  const { pathname } = useLocation();

  const handleCancelForm = () => history.push(pathname.replace('/new', ''));

  useKeypress('Escape', handleCancelForm);

  return (
    <>
      <ForumHeader />

      <SwitchWithRedirect>
        <Route exact path={ROUTES.FORUM}>
          <Topics topics={tempTopics} />
        </Route>

        <Route exact path={ROUTES.FORUM_NEW_TOPIC}>
          <Topics topics={tempTopics} />
          <NewTopicForm cancel={handleCancelForm} />
        </Route>

        <Route exact path={ROUTES.FORUM_FAVORITE}>
          <div>NOPE</div>
        </Route>

        <Route exact path={ROUTES.FORUM_TOPIC}>
          <Topic />
        </Route>

        <Route exact path={ROUTES.FORUM_NEW_POST}>
          <Topic />
          <NewTopicForm cancel={handleCancelForm} />
        </Route>
      </SwitchWithRedirect>
    </>
  );
});
