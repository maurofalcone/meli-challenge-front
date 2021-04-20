export interface PriceProps {
    decimals?: number;
    value: number;
    variant?: "none" | "superIndex";
    prefix?: string;
    size: "small" | "normal" | "large";
}
