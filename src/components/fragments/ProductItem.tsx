import { dummyProduct } from "@/data/dummyProduct";
import { Card, Grid, Heading, Image, Text } from "@chakra-ui/react";

function ProductItem() {
  return (
    <>
      <Heading fontSize={"2xl"} color={"#F74D4D"}>
        Product
      </Heading>
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "1fr 1fr",
          md: "1fr 1fr 1fr",
          lg: "1fr 1fr 1fr 1fr",
        }}
        gap="1rem"
        mt="1rem"
      >
        {dummyProduct.map((item) => (
          <Card.Root maxW="sm" overflow="hidden" key={item.id}>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
            />
            <Card.Body gap="2">
              <Card.Title color={"#F74D4D"}>{item.name}</Card.Title>
              <Card.Description>
                <Text letterSpacing="tight" mt="2">
                  Rp. {item.price}
                </Text>
                <Text letterSpacing="tight" mt="2">
                  Stock: {item.stock}
                </Text>
              </Card.Description>
            </Card.Body>
          </Card.Root>
        ))}
      </Grid>
    </>
  );
}

export default ProductItem;
