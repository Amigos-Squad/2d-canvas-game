export type Props = {
  alt: string;
  src?: string | null;
  className?: string;
  isChangeable?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
