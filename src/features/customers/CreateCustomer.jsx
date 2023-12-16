import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./CustomerSlice";
import { Button, Input, Stack, Text } from "@chakra-ui/react";

function Customer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const dispatch = useDispatch();
  function handleClick() {
    if (!fullName || !nationalId) return;
    dispatch(createCustomer(fullName, nationalId));
  }

  return (
    <Stack spacing={"30px"}>
      <Text fontSize={"16pt"} fontWeight={600}>
        Create new customer
      </Text>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        className="inputs"
        spacing={"15px"}
      >
        <Stack
          justifyContent={"center"}
          alignItems={"flex-start"}
          width={"50%"}
        >
          <Text>Customer full name</Text>
          <Input
            size={"md"}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </Stack>
        <Stack
          justifyContent={"center"}
          alignItems={"flex-start"}
          width={"50%"}
        >
          <Text>National ID</Text>
          <Input
            size={"md"}
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </Stack>
        <Button
          bgColor="#886CE4"
          color="white"
          _hover={{ color: "black", bgColor: "gray.200" }}
          onClick={handleClick}
        >
          Create new customer
        </Button>
      </Stack>
    </Stack>
  );
}

export default Customer;
