import React from 'react';
import { Icon, ICONS } from '@/components';

export const parsePosition = (position: number) => {
  if (position > 10) {
    return position;
  }

  if (position === 1) {
    return <Icon name={ICONS.MedalFirst} />;
  }

  if (position === 2) {
    return <Icon name={ICONS.MedalSecond} />;
  }

  if (position === 3) {
    return <Icon name={ICONS.MedalThird} />;
  }

  if (position < 6) {
    return (
      <Icon
        name={ICONS.MedalOther}
        config={{ isEnd: false, value: position }}
      />
    );
  }

  return (
    <Icon name={ICONS.MedalOther} config={{ isEnd: true, value: position }} />
  );
};
