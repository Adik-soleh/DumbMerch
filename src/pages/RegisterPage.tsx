import RegisterInput from "@/components/elements/inputs/RegisterInput";
import { Box, Flex, Heading } from "@chakra-ui/react";

function RegisterPage() {
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
        <Heading fontSize={{ base: "xl", md: "2xl" }} textAlign="center">Register</Heading>
        <RegisterInput />
      </Flex>
    </Box>
  );
}

export default RegisterPage;
