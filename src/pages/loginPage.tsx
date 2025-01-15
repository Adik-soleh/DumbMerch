import LoginInput from "@/components/elements/inputs/LoginInput";
import { Flex, Heading } from "@chakra-ui/react";

function LoginPage() {
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
      <Heading fontSize={"2xl"}>Login</Heading>
      <LoginInput/>
    </Flex>
  );
}

export default LoginPage;
