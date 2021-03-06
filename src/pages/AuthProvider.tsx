import React, { ReactElement, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { ROUTES } from '@/utils';
import { Store } from '@/redux/store.type';
import { PRIVATE_ROUTES_MAP } from './routes';
import { ChildrenProps } from '@/models';

export const AuthProvider = React.memo(
  ({ children }: ChildrenProps): ReactElement => {
    const history = useHistory();
    const { pathname } = useLocation();
    const { user, isLoaded } = useSelector((store: Store) => store).user;

    const handleRedirect = useCallback(() => {
      if (!user && PRIVATE_ROUTES_MAP[pathname]) {
        history.push(ROUTES.LOGIN);
      } else if (
        user &&
        (pathname === ROUTES.LOGIN || pathname === ROUTES.REGISTRATION)
      ) {
        history.push(ROUTES.HOME);
      }
    }, [history, pathname, user]);

    useEffect(() => {
      if (isLoaded) {
        handleRedirect();
      }
    }, [handleRedirect, isLoaded]);

    return <>{children}</>;
  }
);
