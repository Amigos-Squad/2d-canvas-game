import loadable from '@loadable/component';
import React, { ReactElement, useMemo } from 'react';
import { IconProps, Props } from './Icon.types';
import './Icon.scss';

const AsyncIcon = loadable(({ name }: IconProps) => import(`./SVG/${name}`), {
  resolveComponent: (components, chunk) =>
    components[(chunk as { name: string }).name],
  cacheKey: ({ name }) => name,
});

export const Icon = React.memo(
  ({ name, onClick, href, config }: Props): ReactElement => {
    const icon = useMemo(() => {
      if (name) {
        if (href) {
          return (
            <a href={href} className="component__svg-icon-link">
              <AsyncIcon name={name} />
            </a>
          );
        }

        return (
          <span onClick={onClick} className="component__svg-icon">
            <AsyncIcon name={name} config={config} />
          </span>
        );
      }
      return <></>;
    }, [name, href, config, onClick]);

    return icon;
  }
);
