import ProfileInput from "@/components/elements/inputs/ProfileInput";
import MyTransaction from "@/components/fragments/MyTransaction";
import { Box, Flex, Heading } from "@chakra-ui/react";

function ProfilePage() {
  return (
    <Flex
      direction={{ base: "column", md: "row" }} // Membuat layout menjadi kolom pada perangkat kecil
      gap={"2rem"}
    >
      <Box p={"1rem"} w={"100%"} display={"flex"} flexDir={"column"}>
        <Heading fontSize={"2xl"} color={"#F74D4D"}>
          My Profile
        </Heading>
        <ProfileInput />
      </Box>
      <Box p={"1rem"} w={"100%"} display={"flex"} flexDir={"column"}>
        <Heading fontSize={"2xl"} color={"#F74D4D"}>
          My Transaction
        </Heading>
        <MyTransaction />
      </Box>
    </Flex>
  );
}

export default ProfilePage;
