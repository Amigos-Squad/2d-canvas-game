import React, { memo, ReactElement } from 'react';
import type { Props } from './Auth.types';
import './Auth.scss';

export const Auth = memo(
  ({ children }: Props): ReactElement => (
    <section className="authorization">
      <div className="authorization__container">
        <div className="authorization__img">nope</div>
        <div className="authorization__form">{children}</div>
      </div>
    </section>
  )
);
