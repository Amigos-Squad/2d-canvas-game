import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from '@/utils';
import { Overview } from './Overview';

export const ProfileContent = React.memo(
  (): ReactElement => (
    <Switch>
      <Route path={ROUTES.PROFILE} exact>
        <Overview />
      </Route>
    </Switch>
  )
);
