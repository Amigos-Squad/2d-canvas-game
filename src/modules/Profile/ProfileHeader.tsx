import React, { memo, ReactElement } from 'react';
import { Header } from '@/components';
import { PROFILE_SUB_ROUTES } from './const';

export const ProfileHeader = memo(
  (): ReactElement => <Header navItems={PROFILE_SUB_ROUTES} />
);
