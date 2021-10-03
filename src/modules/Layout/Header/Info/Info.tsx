import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '@/redux';
/* import { GH_LINK } from './const';

import { Icon, ICONS } from '@/components'; */

import './Info.scss';

export const Info = React.memo((): ReactElement => {
  const dispatch = useDispatch();

  const handleSignOut = () => dispatch(signOut());

  return (
    <div className="page-header__info">
      {/* <Icon name={ICONS.GitHub} href={GH_LINK} /> */}
      <span className="page-header__sign-out" onClick={handleSignOut}>
        SIGN OUT
      </span>
    </div>
  );
});
