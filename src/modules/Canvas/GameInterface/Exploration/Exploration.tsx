import React, { memo, ReactElement } from 'react';
import { Icon, ICONS } from '@/components';
import './Exploration.scss';

type Props = {
  day: number;
  isPaused: boolean;
  togglePause: () => void;
};

export const Exploration = memo(
  ({ day, isPaused, togglePause }: Props): ReactElement => {
    return (
      <>
        <section className="game-control">
          <div className="game-control__day">
            <div className="game-control__day-value">{day}</div>
          </div>
          <div className="game-control__control" onClick={togglePause}>
            {!isPaused && <Icon name={ICONS.Pause} />}
          </div>
        </section>

        {isPaused && (
          <div className="game-control__pause-overlay">
            <div className="game-control__play" onClick={togglePause}>
              <div>Paused</div>
              <Icon name={ICONS.Play} />
            </div>
          </div>
        )}
      </>
    );
  }
);
