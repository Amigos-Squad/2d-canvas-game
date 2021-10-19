import React, { ReactElement, memo, useState, useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import './Loader.scss';

export const Loader = memo((): ReactElement => {
  const [loading, setLoading] = useState(false);
  const [color] = useState('#ffffff');
  let interval: NodeJS.Timer;

  useEffect(() => {
    interval = setInterval(() => setLoading(true), 1000);
    return () => {
      setLoading(false);
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="loader">
      <ClipLoader color={color} loading={loading} size={150} />
    </div>
  );
});
