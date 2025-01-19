import { Button } from "@/components/ui/button";
import { items } from "@/data/dummyProduct";
import { Box, Heading, Input } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export function EditCategory() {
  const { id } = useParams<{ id: string }>();
  const product = items.find((item) => item.id.toString() === id);

  return (
    <Box
      margin={"auto"}
      mt={"2rem"}
      maxWidth={{ base: "90%", md: "70rem" }}
      px={{ base: "1rem", md: "0" }}
    >
      <Heading
        fontSize={{ base: "xl", md: "2xl" }}
        color={"white"}
        textAlign={{ base: "center", md: "left" }}
      >
        Edit Category
      </Heading>
      <Box mt={"2rem"}>
        <Input bgColor={"#303030"} value={product?.category} />
      </Box>
      <Button w={"full"} mt={"3rem"} bgColor={"#56c05a"} color={"white"}>
        Save
      </Button>
    </Box>
  );
}
