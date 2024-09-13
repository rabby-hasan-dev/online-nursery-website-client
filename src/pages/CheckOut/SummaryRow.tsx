import { Typography } from "antd";

const { Title, Text } = Typography;


interface SummaryRowProps {
    label: string;
    value: number;
    isBold?: boolean;
    isTotal?: boolean;
}

const SummaryRow = ({ label, value, isBold, isTotal, }: SummaryRowProps) => {
    return (
        <Text
            className={`flex justify-between ${isBold ? "font-bold" : ""} ${isTotal ? "text-xl" : ""
                }`}
        >
            {label}: <span>${value.toFixed(2)}</span>
        </Text>
    );
};

export default SummaryRow;