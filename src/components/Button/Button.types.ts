import { BUTTON_TYPES } from './const';

export type Props = {
  buttonType?: BUTTON_TYPES;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
