import { useParams } from "react-router-dom";
import { dummyProduct } from "@/data/dummyProduct";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import RedButton from "@/components/elements/button/RedButton";

function DetailProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = dummyProduct.find((item) => item.id.toString() === id);

  if (!product) {
    return <Text>Produk tidak ditemukan!</Text>;
  }

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      gap="2rem"
      padding="1rem"
      align="center"
    >
      <Image
        src={product.image}
        boxSize={{ base: "100%", sm: "300px", md: "30rem" }}
        objectFit="cover"
        borderRadius="md"
      />

      <Flex flexDir="column" flex="1" gap="1rem" maxW={"80vh"}>
        <Heading  color={"#F74D4D"} fontSize={{ base: "xl", md: "4xl" }}>{product.name}</Heading>
        <Text fontSize="md">Stock: {product.stock}</Text>
        <Box>
          <Text fontSize="sm">{product.description}</Text>
        </Box>

        <Flex
          alignItems="center"
          justifyContent={"end"}
          direction={{ base: "column", sm: "row" }}
          gap="1rem"
          mt="2rem"
        >
          <Text
            fontSize="lg"
            fontWeight="bold"
            color="#F74D4D"
          >
            Rp. {product.price}
          </Text>
        </Flex>
          <RedButton label="Buy" />
      </Flex>
    </Flex>
  );
}

export default DetailProductPage;
