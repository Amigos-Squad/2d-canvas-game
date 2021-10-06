import { Props } from '../Input/Input.types';

export type TextareaProps = {
  onChange: (e: React.FormEvent<HTMLTextAreaElement>) => void;
} & Omit<Props, 'onChange'> &
  React.HTMLProps<HTMLTextAreaElement>;
