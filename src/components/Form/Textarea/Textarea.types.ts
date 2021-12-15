import { Props } from '../Input/Input.types';

export type TextareaProps = {
  error: string;
  onChange: (e: React.FormEvent<HTMLTextAreaElement>) => void;
} & Omit<Props, 'onChange'> &
  React.HTMLProps<HTMLTextAreaElement>;
