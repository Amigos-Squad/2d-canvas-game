import React, { ReactElement } from 'react';
import { GH_LINK } from './const';

import { Icon, ICONS } from '@/components';

import './Info.scss';

export const Info = React.memo(
  (): ReactElement => (
    <div className="page-header__info">
      <Icon name={ICONS.GitHub} href={GH_LINK} />
    </div>
  )
);
