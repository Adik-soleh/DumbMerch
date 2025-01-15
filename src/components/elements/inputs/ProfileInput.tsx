import Avatar from "@/assets/Avatar.svg";
import { Field } from "@/components/ui/field";
import { Flex, Image, Input, Textarea } from "@chakra-ui/react";
import RedButton from "../button/RedButton";
function ProfileInput() {
  return (
    <Flex gap={"1rem"} direction={{ base: "column", md: "row" }} mt={"1rem"}>
      <Image src={Avatar} boxSize={{ base: "200px", md: "full" }} />
      <form action="" style={{ width: "100%" }}>
        <Flex direction={"column"} gap={"1rem"} width="full" mb={"1rem"}>
          <Field label={"Name"} />
          <Input />
          <Field label={"Email"} />
          <Input />
          <Field label={"Phone"} />
          <Input />
          <Field label={"Gender"} />
          <Input />
          <Field label={"Address"} />
          <Textarea />
        </Flex>
        <RedButton label={"Save"} />
      </form>
    </Flex>
  );
}

export default ProfileInput;
