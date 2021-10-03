import React, { ReactElement } from 'react';
import { useRouteMatch, Route, Switch } from 'react-router-dom';
import { ROUTES } from '@/utils';
import { Overview } from './Overview';

export const ProfileContent = React.memo((): ReactElement => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={ROUTES.PROFILE} exact>
        <Overview />
      </Route>
      <Route path={`${path}${ROUTES.PROFILE_ACHIEVEMENTS}`}>
        <Overview />
      </Route>
      <Route path={`${path}${ROUTES.PROFILE_STATISTICS}`}>
        <Overview />
      </Route>
    </Switch>
  );
});
