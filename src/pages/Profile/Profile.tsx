import React, { ReactElement, memo } from 'react';
import { Page } from '@/modules';
import { AvatarIcon } from '@/components/Icons/SVG/Avatar';
import { ProfileNav } from '@/modules/Profile/ProfileNav';

import './Profile.scss';

export const Profile = memo(
  (): ReactElement => (
    <Page withHeader>
      <div className="profile-page">
        <ProfileNav />
        <div className="profile-page-overview">
          <div className="avatar">
            <AvatarIcon />
          </div>
          <div className="user">USER NAME</div>
          <div className="score">
            <div>max score</div>
            <div>4004</div>
          </div>
        </div>
      </div>
    </Page>
  )
);
