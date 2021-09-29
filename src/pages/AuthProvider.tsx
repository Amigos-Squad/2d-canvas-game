import React, { ReactElement, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { ROUTES } from '@/utils';
import { Store } from '@/redux/store.type';
import { PRIVATE_ROUTES_MAP } from './routes';

type Props = {
  children: ReactElement;
};

export const AuthProvider = React.memo(({ children }: Props): ReactElement => {
  const history = useHistory();
  const { pathname } = useLocation();
  const { user } = useSelector((store: Store) => store).user;

  useEffect(() => {
    if (!user && PRIVATE_ROUTES_MAP[pathname]) {
      history.push(ROUTES.LOGIN);
    } else if (
      user &&
      (pathname === ROUTES.LOGIN || pathname === ROUTES.REGISTRATION)
    ) {
      history.push(ROUTES.HOME);
    }
  }, [user, history, pathname]);

  return children;
});
