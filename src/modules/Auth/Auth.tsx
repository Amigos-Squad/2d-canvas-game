import React, { memo, ReactElement, useEffect } from 'react';
import type { Props } from './Auth.types';
import './Auth.scss';
import { ROUTES, useBoolean } from '@/utils';
import { useHistory } from 'react-router';

export const Auth = memo(
  ({ children }: Props): ReactElement => {
    const history = useHistory();
    const [isLogin, toggleIsLogin] = useBoolean(history.location.pathname === ROUTES.LOGIN)
    // let form = <LoginForm/>;
    useEffect(() => {
      if (isLogin) {
        history.push(ROUTES.LOGIN)
      } else {
        history.push(ROUTES.REGISTRATION)
      }
    }, [isLogin])

    return (
      <section className="authorization">
        <div className="authorization__container">
          <div className="authorization__img">nope</div>
          {/* <img className="authorization__img" src="./src/assets/temp.png"></img> */}
          <div className="authorization__form">
            <div className="authorization__tabs">
              <div className={`authorization__tabs__tab ${  isLogin ? "authorization__tabs--active" : null}`} onClick={toggleIsLogin}>Login</div>/
              <div className={`authorization__tabs__tab ${  !isLogin ? "authorization__tabs--active" : null}`} onClick={toggleIsLogin}>Registration</div>
            </div>
            {children}
            {/* {form} */}
          </div>
        </div>
      </section>
    )
  }
);
