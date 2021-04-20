import { PriceProps } from "../price";

type ImageLoading = "eager" | "lazy";

export interface ProductProps {
    id: string | number;
    name: string;
    price: number;
    description?: string;
    location: string;
    url: string;
    style?: React.CSSProperties;
    imgLoading?: ImageLoading;
    onClick: any;
    decimals?: PriceProps['decimals'];
    prefix?: PriceProps['prefix'];
    size: PriceProps['size'];
}