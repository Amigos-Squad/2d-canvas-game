import React, { memo, ReactElement, useEffect } from 'react';
import { useHistory } from 'react-router';
import type { Props } from './Auth.types';
import { ROUTES, useBoolean } from '@/utils';
import { useHistory } from 'react-router';
import logo from '../../assets/temp.png'
import './Auth.scss';

export const Auth = memo(({ children }: Props): ReactElement => {
  const history = useHistory();
  const [isLogin, toggleIsLogin] = useBoolean(
    history.location.pathname === ROUTES.LOGIN
  );
  // let form = <LoginForm/>;
  useEffect(() => {
    if (isLogin) {
      history.push(ROUTES.LOGIN);
    } else {
      history.push(ROUTES.REGISTRATION);
    }
  }, [isLogin, history]);

    return (
      <section className="authorization">
        <div className="authorization__container">
          <img className="authorization__img" src={logo}></img>
          {/* <div/> */}
          <div className="authorization__form">
            <div className="authorization__tabs">
              <div className={"authorization__tabs__tab " + (isLogin ? "authorization__tabs--active" : null)} onClick={toggleIsLogin}>Login</div>/
              <div className={"authorization__tabs__tab " + (!isLogin ? "authorization__tabs--active" : null)} onClick={toggleIsLogin}>Registration</div>
            </div>
          </div>
          {children}
          {/* {form} */}
        </div>
      </div>
    </section>
  );
});
