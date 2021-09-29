import React, { ReactElement, memo } from 'react';
import { Page } from '@/modules';
import { ForumNav } from '@/modules/Forum/ForumNav';
import { Topics } from '@/modules/Forum/Topics';
import {InsideTopic} from '@/modules/Forum/InsideTopic';
import {useHistory} from 'react-router';
import {ROUTES, useBoolean} from '@/utils';

import './Forum.scss';

export const Forum = memo(
  (): ReactElement => {
      const history = useHistory();
      const [showNewTopic, toggleShowNewTopic] = useBoolean();
      return (
          <Page withHeader>
              <div className="forum-page">
                  <ForumNav toggleFunction={toggleShowNewTopic}/>
                  { history.location.pathname === ROUTES.FORUM ? <Topics showNewTopic={showNewTopic}/> :
                    <InsideTopic />}
              </div>
          </Page>
      );
  }
);
