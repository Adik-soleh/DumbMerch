import Frame from "@/assets/Frame.svg";
import BlackButton from "@/components/elements/button/BlackButton";
import RedButton from "@/components/elements/button/RedButton";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";
export function AuthLayout() {
  const navigate = useNavigate();
  return (
    <Flex
      justifyItems={"center"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"4rem"}
    >
      <Box mt={"6rem"}>
        <Image src={Frame} boxSize={"10rem"} />
        <Flex direction={"column"}>
          <Text fontSize={"50px"}>Easy, Fast and Reliable</Text>
          <Box w={"25rem"}>
            <Text color={"#6A6A6A"}>
              Go Shooping for merchandise, just go to dumb merch shopping. the
              biggest merchandise in Indonesia
            </Text>
          </Box>
        </Flex>
        <Flex mt={"2rem"} gap={"1rem"}>
          <RedButton label={"Login"} onClick={() => navigate("/auth/login")} />
          <BlackButton
            label={"Register"}
            onClick={() => navigate("/auth/register")}
          />
        </Flex>
      </Box>

      <Outlet />
    </Flex>
  );
}
