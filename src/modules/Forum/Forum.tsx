import React, { memo, ReactElement } from 'react';
import { useBoolean } from '@/utils';
import { ForumContent, ForumHeader } from '.';

export const ForumContainer = memo((): ReactElement => {
  const [showNewTopic, toggleFunction] = useBoolean();

  return (
    <>
      <ForumHeader toggleFunction={toggleFunction} />
      <ForumContent showNewTopic={showNewTopic} />
    </>
  );
});
