import React, { ReactElement } from 'react';
import { TopicOpenIcon } from '@/components/Icons/SVG/TopicOpen';

import './Topics.scss';

export const TopicItem = (): ReactElement => (
  <div className="topic-item">
    <div className="topic-item__statusIcon">
      <TopicOpenIcon />
    </div>
    <div className="topic-item__title">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque
    </div>
    <div className="topic-item__posts">2031</div>
    <div className="topic-item__starter">Kuart</div>
    <div className="topic-item__lastMessage">16:42</div>
  </div>
);
