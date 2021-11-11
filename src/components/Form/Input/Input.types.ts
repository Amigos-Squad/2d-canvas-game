export type Props = {
  value: string;
  error?: string;
  horizontal?: boolean;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
} & React.HTMLProps<HTMLInputElement>;
