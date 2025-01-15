import Frame from "@/assets/Frame.svg";
import { dummyData } from "@/data/dummyProduct";
import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";

function MyTransaction() {
  return (
    <>
      {dummyData.map((item) => (
        <Flex
          gap={"1rem"}
          w={"full"}
          mt={"1rem"}
          height={"auto"}
          bgColor={"#181818"}
          p={"1rem"}
          rounded={"md"}
          shadow={"md"}
          key={item.id}
          direction={{ base: "column", md: "row" }}
        >
          <Image src={item.image} boxSize={"80px"} />
          <Flex flexDir={"column"} justify={"space-between"} gap={"1.5rem"}>
            <Box>
              <Text color={"#F74D4D"}>{item.name}</Text>
              <Text color={"#F74D4D"}>{item.date}</Text>
              <Text>Price: Rp.{item.price}</Text>
            </Box>
            <Text>Sub Total: {item.total}</Text>
          </Flex>
          <Spacer />
          <Image src={Frame} boxSize={"60px"} />
        </Flex>
      ))}
    </>
  );
}

export default MyTransaction;
