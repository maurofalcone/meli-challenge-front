import { PriceProps } from "../../types";

export const getInt = (value: number): string => {
    try {
        const valueAsString = value.toString();
        const dotIndex = valueAsString.indexOf('.');
        const intPart = valueAsString.slice(0, dotIndex);
        return intPart;
    } catch (error) {
        console.log(error.message);
        return '0';
    }
}

export const fillDecimalPlaces = (value: number): string => {
    try {
        const valueAsString = value.toString();
        const dotIndex = valueAsString.indexOf('.');
        if (dotIndex !== -1) {
            const decimals = valueAsString.slice(dotIndex + 1, valueAsString.length);
            const completedDecimal = decimals.length === 1 ? `${decimals}0` : decimals;
            return completedDecimal;
        }
        return '00';
    } catch (error) {
        console.log(error.message);
        return '00';
    }
}

export const getFontSize = (value: PriceProps['size']) => {
    switch (value) {
        case "small":
            return "14px";
        case "large":
            return "36px";
        default:
            return "20px";
    }
}