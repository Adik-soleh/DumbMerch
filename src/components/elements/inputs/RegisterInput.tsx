import RedButton from "@/components/elements/button/RedButton";
import { Flex, Input } from "@chakra-ui/react";

function RegisterInput() {
  return (
    <>
      <form action="">
        <Flex flexDir={"column"} gap={"1rem"}>
          <Input />
          <Input />
          <Input />
          <RedButton label={"Register"} />
        </Flex>
      </form>
    </>
  );
}

export default RegisterInput;
