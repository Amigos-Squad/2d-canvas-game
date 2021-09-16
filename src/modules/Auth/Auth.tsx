import React, { memo, ReactElement } from 'react';
import type { Props } from './Auth.types';
import './Auth.scss';

export const Auth = memo(({ children }: Props): ReactElement => <div className="auth-page">{children}</div>);
