import LoginInput from "@/components/elements/inputs/LoginInput";
import { Box, Flex, Heading } from "@chakra-ui/react";

function LoginPage() {
  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      px={{ base: "1rem", md: "0" }}
    >
      <Flex
        direction={"column"}
        w={{ base: "90%", md: "50vh"}}
        maxW="400px"
        bgColor={"#181818"}
        p={{ base: "1rem", md: "2rem" }}
        gap={"0.5rem"}
        rounded={"md"}
        boxShadow="lg"
      >
        <Heading fontSize={{ base: "xl", md: "2xl" }} textAlign="center">Login</Heading>
        <LoginInput />
      </Flex>
    </Box>
  );
}

export default LoginPage;
