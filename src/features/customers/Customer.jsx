import { Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

function Customer() {
  const customer = useSelector((s) => s.customer.fullName);
  return (
    <Text fontSize={"17pt"} fontWeight={600}>
      👋 Welcome, {customer}
    </Text>
  );
}

export default Customer;
