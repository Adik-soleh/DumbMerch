import { ActionButton } from "@/components/elements/button/ActionButton";
import { Box, Flex, Heading, Table } from "@chakra-ui/react";

function ListProductPage() {
  return (
    <>
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
          List Product
        </Heading>
        <Box mt={"2rem"} overflowX="auto">
          <Table.Root size="lg">
            <Table.Header>
              <Table.Row bgColor={"#303030"}>
                <Table.ColumnHeader>No</Table.ColumnHeader>
                <Table.ColumnHeader>Photo</Table.ColumnHeader>
                <Table.ColumnHeader>Product Name</Table.ColumnHeader>
                <Table.ColumnHeader>Product Desc</Table.ColumnHeader>
                <Table.ColumnHeader>Price</Table.ColumnHeader>
                <Table.ColumnHeader>Qty</Table.ColumnHeader>
                <Table.ColumnHeader textAlign={"center"}>Action</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {items.map((item, index) => (
                <Table.Row
                  key={item.id}
                  bgColor={index % 2 === 0 ? "#232323" : "#303030"}
                >
                  <Table.Cell>{item.id}</Table.Cell>
                  <Table.Cell >{item.photo}</Table.Cell>
                  <Table.Cell >{item.ProductName}</Table.Cell>
                  <Table.Cell >{item.prodDesc}</Table.Cell>
                  <Table.Cell >{item.price}</Table.Cell>
                  <Table.Cell >{item.qty}</Table.Cell>
                  <Table.Cell>
                    <Flex
                      justifyContent={{ base: "center", md: "end" }}
                      gap={"1rem"}
                    >
                      <ActionButton bgcolor="#56c05a" label="Edit" />
                      <ActionButton bgcolor="#f74d4d" label="Delete" />
                    </Flex>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Box>
      </Box>
    </>
  );
}

export default ListProductPage;

const items = [
  {
    id: 1,
    photo: "mouse.jpg",
    ProductName: "Mouse",
    prodDesc: "Mouse berkualitas..",
    price: "500000",
    qty: "200",
  },
  {
    id: 2,
    photo: "bag.jpg",
    ProductName: "Bag",
    prodDesc: "Mouse berkualitas..",
    price: "500000",
    qty: "200",
  },
  {
    id: 3,
    photo: "doll.jpg",
    ProductName: "Doll",
    prodDesc: "Mouse berkualitas..",
    price: "500000",
    qty: "200",
  },
  {
    id: 4,
    photo: "keyboard.jpg",
    ProductName: "KeyBoard",
    prodDesc: "Mouse berkualitas..",
    price: "500000",
    qty: "200",
  },
  {
    id: 5,
    photo: "pillow.jpg",
    ProductName: "Pillow",
    prodDesc: "Mouse berkualitas..",
    price: "500000",
    qty: "200",
  },
];
