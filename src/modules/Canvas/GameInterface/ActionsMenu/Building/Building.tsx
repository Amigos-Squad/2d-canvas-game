import React, { ReactElement, useMemo } from 'react';

export const Building = React.memo((): ReactElement => {
  const rooms = useMemo(() => <></>, []);

  return <div className="game-interface__actions-menu">{rooms}</div>;
});
