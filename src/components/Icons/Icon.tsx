import loadable from '@loadable/component';
import React, { ReactElement, useMemo } from 'react';
import { Props } from './Icon.types';

const AsyncIcon = loadable(({ name }) => import(`./SVG/${name}`), {
  resolveComponent: (components, chunk) =>
    components[(chunk as { name: string }).name],
});

export const Icon = React.memo(
  ({ name, onClick, href }: Props): ReactElement => {
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
          <div onClick={onClick} aria-hidden="true">
            <AsyncIcon name={name} />
          </div>
        );
      }
      return <></>;
    }, [name, href, onClick]);

    return icon;
  }
);
