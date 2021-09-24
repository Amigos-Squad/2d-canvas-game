export type Props = {
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
    value: string;
} & React.HTMLProps<HTMLInputElement>;
