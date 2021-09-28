import React, { ReactElement } from 'react';
import { tempTopicPosts } from './const';
import { InsideTopicItem } from './InsideTopicItem';

import './InsideTopic.scss';

export const InsideTopic = React.memo(
  (): ReactElement => <div className="inside-topic">
      <div className="inside-topic__title">BUT I MUST EXPLAIN TO YOU HOW ALL THIS MISTAKEN IDEA OF DENOUNCING PLEASURE </div>
      <div className="inside-topic__container">
          { tempTopicPosts.map((item) => <InsideTopicItem {...item} key={item.id}/>) }
      </div>
  </div>
);
