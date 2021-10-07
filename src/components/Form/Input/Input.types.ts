export type Props = {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  value: string;
  horizontal?: boolean;
} & React.HTMLProps<HTMLInputElement>;
