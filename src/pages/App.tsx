import React, { memo, useRef, ReactElement } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Switch, useLocation } from 'react-router-dom';
import { Route } from 'react-router';
import { ErrorBoundaryWithRouter } from '@/components';
import { AuthProvider } from './AuthProvider';
import { USED_ROUTES } from './routes';
import './App.scss';

export const App = memo(
  (): ReactElement => {
    const location = useLocation();
    const nodeRef = useRef(null)

    return (
      <AuthProvider>
        <ErrorBoundaryWithRouter>
          <TransitionGroup nodeRef={nodeRef} className="transition-group__wrapper">
            <CSSTransition
              nodeRef={nodeRef}
              key={location.key}
              classNames="fade"
              timeout={500}
            >
              <div className="switch-container" ref={nodeRef}>
                <Switch location={location} ref={nodeRef}>
                  {USED_ROUTES.map(({ path, exact, component }) => (
                    <Route path={path} key={path} exact={exact}>
                      {component}
                    </Route>
                  ))}
                </Switch>
              </div>
            </CSSTransition>
          </TransitionGroup>
        </ErrorBoundaryWithRouter>
      </AuthProvider>
    )
  }
);
