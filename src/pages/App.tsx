import React, { memo, ReactElement } from 'react';
import { Switch, useLocation } from 'react-router-dom';
import { Route } from 'react-router';
import { ErrorBoundaryWithRouter, Toast } from '@/components';
import { AuthProvider } from './AuthProvider';
import { USED_ROUTES } from './routes';
import './App.scss';

export const App = memo((): ReactElement => {
  const location = useLocation();
  return (
    <AuthProvider>
      <ErrorBoundaryWithRouter>
        <div className="switch-container">
          <Switch location={location}>
            {USED_ROUTES.map(({ path, exact, component }) => (
              <Route path={path} key={path} exact={exact}>
                {component}
              </Route>
            ))}
          </Switch>
          <Toast />
        </div>
      </ErrorBoundaryWithRouter>
    </AuthProvider>
  );
});
