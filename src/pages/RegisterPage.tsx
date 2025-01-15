import RegisterInput from "@/components/elements/inputs/RegisterInput";
import { Flex, Heading } from "@chakra-ui/react";

function RegisterPage() {
  return (
    <Flex
      direction={"column"}
      w={"4/12"}
      mt={"6rem"}
      bgColor={"#181818"}
      p={"2rem"}
      gap={"0.5rem"}
      rounded={"md"}
    >
      <Heading fontSize={"2xl"}>Register</Heading>
      <RegisterInput/>
    </Flex>
  );
}

export default RegisterPage;