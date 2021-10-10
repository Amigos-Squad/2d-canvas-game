export interface InputRule {
  message: string,
  rule: RegExp
}

export type Props = {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  value: string;
  horizontal?: boolean;
  rules?: InputRule[]
} & React.HTMLProps<HTMLInputElement>;
