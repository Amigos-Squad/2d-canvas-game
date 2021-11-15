import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { ROUTES } from '@/utils';
import { Store } from '@/redux/store.type';
import { PRIVATE_ROUTES_MAP } from './routes';
import { ChildrenProps } from '@/models';
import { oauthSignIn } from '@/redux';

export const AuthProvider = React.memo(
  ({ children }: ChildrenProps): ReactElement => {
    const { search } = useLocation();
    const history = useHistory();
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const [isAuth, changeAuth] = useState(false);
    const { user, isLoaded } = useSelector((store: Store) => store).user;

    const handleRedirect = useCallback(() => {
      const code = new URLSearchParams(search).get('code');

      if (!user && !code && PRIVATE_ROUTES_MAP[pathname]) {
        history.push(ROUTES.LOGIN);
      } else if (!user && code && PRIVATE_ROUTES_MAP[pathname]) {
        dispatch(oauthSignIn(code));
        history.push(ROUTES.HOME);
      } else if (
        user &&
        (pathname === ROUTES.LOGIN || pathname === ROUTES.REGISTRATION)
      ) {
        history.push(ROUTES.HOME);
      } else {
        changeAuth(true);
      }
    }, [history, pathname, user]);

    useEffect(() => {
      if (isLoaded) {
        handleRedirect();
      }
    }, [handleRedirect, isLoaded, user]);

    return isAuth ? <>{children}</> : <></>;
  }
);
