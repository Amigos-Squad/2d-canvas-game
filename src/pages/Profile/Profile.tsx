import React, { ReactElement, memo } from 'react';
import { Page, ProfileContent } from '@/modules';
import { ContentContainer } from '@/components';

export const Profile = memo(
  (): ReactElement => (
    <Page>
      <ContentContainer>
        <ProfileContent />
      </ContentContainer>
    </Page>
  )
);
