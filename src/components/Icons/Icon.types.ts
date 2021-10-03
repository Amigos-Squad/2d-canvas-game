import { ICONS } from './const';

export type IconConfig = Record<string, string | boolean | number>;

export type Props = {
  name: ICONS;
  href?: string;
  onClick?: () => void;
  config?: IconConfig;
};

export type IconProps = {
  name: ICONS;
  config?: IconConfig;
};
