import loadable from '@loadable/component';
import React, { ReactElement, memo } from 'react';
import { IconProps, Props } from './Icon.types';
import './Icon.scss';

const AsyncIcon = loadable(
  (props: IconProps) => import(`./SVG/${props.name}`),
  {
    resolveComponent: (components, chunk) => {
      return components[(chunk as { name: string }).name];
    },
    cacheKey: ({ name }) => name,
  }
);

export const Icon = memo(
  ({
    name,
    onClick,
    href,
    config = {},
    className = '',
  }: Props): ReactElement => {
    const icon = () => {
      if (name) {
        if (href) {
          return (
            <a href={href} className="component__svg-icon-link">
              <AsyncIcon name={name} />
            </a>
          );
        }

        return (
          <div onClick={onClick} className={`component__svg-icon ${className}`}>
            <AsyncIcon name={name} config={config} />
          </div>
        );
      }
      return <></>;
    };

    return icon();
  }
);
