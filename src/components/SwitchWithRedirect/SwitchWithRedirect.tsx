import React, { memo, ReactElement } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ROUTES } from '@/utils';
import { ChildrenProps } from '@/models';

export const SwitchWithRedirect = memo(
  ({ children }: ChildrenProps): ReactElement => (
    <Switch>
      {children}
      <Route path={`/${ROUTES.NOT_FOUND}`}>
        <Redirect to="/404" />
      </Route>
    </Switch>
  )
);
