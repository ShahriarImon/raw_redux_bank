import { Button, HStack, Input, Select, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import BalanceDisplay from "./BalanceDisplay";
import { useDispatch, useSelector } from "react-redux";
import { deposit, payLoan, requestLoan, withdraw } from "./AccountSlice";

function AccountOperations() {
  const dispatch = useDispatch();
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");
  const loan = useSelector((s) => s.account?.loan);

  return (
    <Stack spacing={"25px"}>
      <Text fontSize={"14pt"} fontWeight={600}>
        Your account operations
      </Text>
      <BalanceDisplay />
      <Stack spacing={5} className="inputs">
        <HStack spacing={"15px"}>
          <Text width={"100px"} textAlign={"left"}>
            Deposit
          </Text>
          <Input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
            width={"450px"}
          />
          <Select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            width={"250px"}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </Select>

          <Button
            onClick={() => dispatch(deposit(depositAmount))}
            colorScheme="teal"
            _hover={{ color: "black", bgColor: "gray.200" }}
          >
            Deposit {depositAmount}
          </Button>
        </HStack>

        <HStack spacing={"15px"}>
          <Text width={"100px"} textAlign={"left"}>
            Withdraw
          </Text>
          <Input
            type="number"
            value={withdrawalAmount}
            width={"450px"}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
          <Button
            colorScheme="teal"
            _hover={{ color: "black", bgColor: "gray.200" }}
            onClick={() => dispatch(withdraw(withdrawalAmount))}
          >
            Withdraw {withdrawalAmount}
          </Button>
        </HStack>

        <HStack spacing={"15px"}>
          <Text width={"100px"} textAlign={"left"}>
            Request loan
          </Text>
          <Input
            width={"450px"}
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            placeholder="Loan amount"
          />
          <Input
            width={"450px"}
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
          />
          <Button
            colorScheme="teal"
            _hover={{ color: "black", bgColor: "gray.200" }}
            onClick={() => dispatch(requestLoan(loanAmount, loanPurpose))}
          >
            Request loan
          </Button>
        </HStack>

        <HStack spacing={"15px"}>
          <Text width={"180px"} textAlign={"left"}>
            Pay back ${loan}
          </Text>
          <Button
            colorScheme="teal"
            _hover={{ color: "black", bgColor: "gray.200" }}
            onClick={() => dispatch(payLoan())}
          >
            Pay loan
          </Button>
        </HStack>
      </Stack>
    </Stack>
  );
}

export default AccountOperations;
