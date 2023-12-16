import { Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const balance = useSelector((s) => s?.account?.balance);
  return (
    <div className="balance">
      <Text
        top="40px"
        right="40px"
        backgroundColor="#363b3b"
        padding="24px 32px"
        borderRadius={"12px"}
        fontWeight="bold"
        fontSize="32px"
        minWidth="180px"
        textAlign="center"
      >
        {formatCurrency(balance)}
      </Text>
    </div>
  );
}

export default BalanceDisplay;
