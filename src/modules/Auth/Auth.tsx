import React, { memo, ReactElement } from 'react';
import type { Props } from './Auth.types';
import logo from '@/assets/temp.png';
import { AuthNav } from './AuthTabs';
import './Auth.scss';

export const Auth = memo(
  ({ children }: Props): ReactElement => (
    <article className="authorization">
      <div className="authorization__container">
        <img className="authorization__img" src={logo} alt="game-logo" />
        <section className="authorization__content">
          <AuthNav />
          {children}
        </section>
      </div>
    </article>
  )
);
