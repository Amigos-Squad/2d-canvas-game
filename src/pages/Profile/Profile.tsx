import React, { ReactElement, memo } from 'react';
import { Page, ProfileContent, ProfileHeader } from '@/modules';
import { ContentContainer } from '@/components';

export const Profile = memo(
  (): ReactElement => (
    <Page>
      <ContentContainer>
        <ProfileHeader />
        <ProfileContent />
      </ContentContainer>
    </Page>
  )
);
