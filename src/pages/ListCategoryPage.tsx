import { ActionButton } from "@/components/elements/button/ActionButton";
import { items } from "@/data/dummyProduct";
import { Box, Flex, Heading, Table } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function ListCategoryPage() {
  const navigate = useNavigate();
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
          List Category
        </Heading>
        <Box mt={"2rem"} overflowX="auto">
          <Table.Root size="lg">
            <Table.Header>
              <Table.Row bgColor={"#303030"}>
                <Table.ColumnHeader>No</Table.ColumnHeader>
                <Table.ColumnHeader textAlign={"center"}>
                  Category Name
                </Table.ColumnHeader>
                <Table.ColumnHeader textAlign={"center"}>
                  Action
                </Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {items.map((item, index) => (
                <Table.Row
                  key={item.id}
                  bgColor={index % 2 === 0 ? "#232323" : "#303030"}
                >
                  <Table.Cell>{item.id}</Table.Cell>
                  <Table.Cell textAlign="center">{item.category}</Table.Cell>
                  <Table.Cell>
                    <Flex
                      justifyContent={{ base: "center", md: "end" }}
                      gap={"1rem"}
                      mr={{ base: "0", md: "10rem" }}
                    >
                      <ActionButton
                        bgcolor="#56c05a"
                        label="Edit"
                        onClick={() =>
                          navigate(`/admin/edit-category/${item.id}`)
                        }
                      />
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

export default ListCategoryPage;
