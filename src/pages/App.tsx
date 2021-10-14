import React, { memo, ReactElement } from 'react';
import { Switch, useLocation } from 'react-router-dom';
import { Route } from 'react-router';
import { ErrorBoundaryWithRouter } from '@/components';
import { AuthProvider } from './AuthProvider';
import { USED_ROUTES } from './routes';
import './App.scss';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const App = memo(
  (): ReactElement => {
    const location = useLocation();
    
    return (
      <AuthProvider>
        <ErrorBoundaryWithRouter>
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              classNames="fade"
              timeout={500}
            >
              <Switch location={location}>
                {USED_ROUTES.map(({ path, exact, component }) => (
                  <Route path={path} key={path} exact={exact}>
                    {component}
                  </Route>
                ))}
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </ErrorBoundaryWithRouter>
      </AuthProvider>
    )
  }
);
