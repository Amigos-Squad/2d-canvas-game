import { BUTTON_TYPES } from './const';

export type Props = {
  buttonType?: BUTTON_TYPES;
  text?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
