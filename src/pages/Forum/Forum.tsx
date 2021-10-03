import React, { ReactElement, memo } from 'react';
import { ContentContainer } from '@/components';
import { ForumContainer, Page } from '@/modules';

import './Forum.scss';

export const Forum = memo(
  (): ReactElement => (
    <Page>
      <ContentContainer>
        <ForumContainer />
      </ContentContainer>
    </Page>
  )
);
