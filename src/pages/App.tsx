import React, { ReactElement } from 'react';
import { Switch, useLocation } from 'react-router-dom';
import { Route } from 'react-router';
import { hot } from 'react-hot-loader/root';
import { ErrorBoundaryWithRouter, Toast } from '@/components';
import { AuthProvider } from './AuthProvider';
import { USED_ROUTES } from './routes';
import './App.scss';
import { ThemeProvider } from '@/utils/theme-context';

const RootApp = (): ReactElement => {
  const location = useLocation();
  return (
    <AuthProvider>
      <ThemeProvider>
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
      </ThemeProvider>
    </AuthProvider>
  );
};

export const App = hot(RootApp);
