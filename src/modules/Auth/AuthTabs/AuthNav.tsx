import React, { ReactElement, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router';
import { ROUTES } from '@/utils';
import './AuthNav.scss';

export const AuthNav = React.memo((): ReactElement => {
  const { pathname } = useLocation();
  const history = useHistory();

  const replaceHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.target as HTMLButtonElement;
    if (pathname === ROUTES.LOGIN && name !== ROUTES.LOGIN) {
      history.push(ROUTES.REGISTRATION);
    } else if (
      pathname === ROUTES.REGISTRATION &&
      name !== ROUTES.REGISTRATION
    ) {
      history.push(ROUTES.LOGIN);
    }
  };

  const classNames = useMemo(() => {
    const data = {
      login: 'authorization__navigation-item',
      registration: 'authorization__navigation-item',
    };

    if (pathname === ROUTES.LOGIN) {
      data.login = `${data.login} ${data.login}_active`;
    } else if (pathname === ROUTES.REGISTRATION) {
      data.registration = `${data.registration} ${data.registration}_active`;
    }

    return data;
  }, [pathname]);

  return (
    <nav className="authorization__navigation">
      <button
        className={classNames.login}
        onClick={replaceHandler}
        name={ROUTES.LOGIN}
        type="button"
      >
        Login
      </button>

      <div className="authorization__navigation__separator">/</div>

      <button
        className={classNames.registration}
        onClick={replaceHandler}
        name={ROUTES.REGISTRATION}
        type="button"
      >
        Registration
      </button>
    </nav>
  );
});
