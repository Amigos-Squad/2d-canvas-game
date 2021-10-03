import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '@/utils';
import { InsideTopic } from './InsideTopic';
import { Topics } from './Topics';
import { ContentProps } from './Forum.types';

export const ForumContent = React.memo(
  ({ showNewTopic }: ContentProps): ReactElement => {
    const history = useHistory();

    return (
      <div className="forum-page">
        {history.location.pathname === ROUTES.FORUM ? (
          <Topics showNewTopic={showNewTopic} />
        ) : (
          <InsideTopic />
        )}
      </div>
    );
  }
);
