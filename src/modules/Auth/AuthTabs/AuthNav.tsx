import React, { ReactElement } from 'react';
import { useHistory, useLocation } from 'react-router';
import block from 'bem-cn-lite';
import { ROUTES } from '@/utils';
import './AuthNav.scss';

const button = block('authorization__navigation-item');

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

  const setButtonClassName = (route: ROUTES) => {
    if (route === pathname) {
      return button({ active: true });
    }

    return button();
  };

  return (
    <nav className="authorization__navigation">
      <button
        className={setButtonClassName(ROUTES.LOGIN)}
        onClick={replaceHandler}
        name={ROUTES.LOGIN}
        type="button"
      >
        Login
      </button>

      <div className="authorization__navigation__separator">/</div>

      <button
        className={setButtonClassName(ROUTES.REGISTRATION)}
        onClick={replaceHandler}
        name={ROUTES.REGISTRATION}
        type="button"
      >
        Registration
      </button>
    </nav>
  );
});
