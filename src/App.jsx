import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import "./app.css";
import { Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
function App() {
  const fullName = useSelector((s) => s.customer.fullName);
  return (
    <div style={{ position: "relative" }}>
      {fullName ? (
        <>
          <Customer />
          <AccountOperations />
        </>
      ) : (
        <>
          <Text fontSize={"18pt"} fontWeight={700}>
            🏦 The React-Redux Bank ⚛️
          </Text>
          <CreateCustomer />
        </>
      )}
    </div>
  );
}

export default App;
