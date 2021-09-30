import React, { ReactElement, memo } from 'react';
import { LeaderboardHeader, LeaderboardList, Page } from '@/modules';
import './Leaderboard.scss';
import { ContentContainer } from '@/components';

export const Leaderboard = memo(
  (): ReactElement => (
    <Page isHeader>
      <ContentContainer isFooterGap>
        <table className="leaderboard__table">
          <LeaderboardHeader />
          <LeaderboardList />
        </table>
      </ContentContainer>
    </Page>
  )
);
