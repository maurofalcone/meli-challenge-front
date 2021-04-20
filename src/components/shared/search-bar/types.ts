export interface SearchBarProps {
    onClick: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}
