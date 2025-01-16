import Frame from "@/assets/Frame.svg";
import BlackButton from "@/components/elements/button/BlackButton";
import RedButton from "@/components/elements/button/RedButton";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";

export function AuthLayout() {
  const navigate = useNavigate();
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justifyItems={"center"}
      alignItems={"center"}
      textAlign={"center"}
      justifyContent={"center"}
      gap={{ base: "2rem", md: "4rem" }}
      px={{ base: "1rem", md: "4rem" }}
     
    >
      <Box textAlign={{ base: "center", md: "left" }} mt={{ base: "5rem", md: "9rem" }}>
        <Image src={Frame} boxSize={{ base: "8rem", md: "10rem" }} mx={{ base: "auto", md: "0" }} />
        <Flex direction={"column"} mt={"1rem"}>
          <Text fontSize={{ base: "xl", md: "2xl", lg: "50px" }} fontWeight="bold">
            Easy, Fast and Reliable
          </Text>
          <Box w={{ base: "100%", md: "25rem" }} mt={"0.5rem"}>
            <Text color={"#6A6A6A"} fontSize={{ base: "sm", md: "md" }}>
              Go Shopping for merchandise, just go to dumb merch shopping. the biggest merchandise in Indonesia
            </Text>
          </Box>
        </Flex>
        <Flex mt={"2rem"} gap={"1rem"} justifyContent={{ base: "center", md: "flex-start" }}>
          <RedButton label={"Login"} onClick={() => navigate("/auth/login")} />
          <BlackButton label={"Register"} onClick={() => navigate("/auth/register")} />
        </Flex>
      </Box>
      <Box w={{ base: "100%", md: "auto" }}>
        <Outlet />
      </Box>
    </Flex>
  );
}
