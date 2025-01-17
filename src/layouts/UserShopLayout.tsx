import Frame from "@/assets/Frame.svg";
import {
  Box,
  Button,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
  Flex,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

function UserShopLayout() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box>
      <Flex
        p={"1rem"}
        justify={"space-between"}
        position={"sticky"}
        top={0}
        zIndex={1000}
        bgColor={"#2223"}
      >
        <Image
          src={Frame}
          boxSize={"40px"}
          onClick={() => navigate("/")}
          cursor="pointer"
        />

        <Flex gap={"1rem"} display={{ base: "none", md: "flex" }}>
          {/* <NavLink
            to="/Complain"
            style={({ isActive }) => ({ color: isActive ? "red" : "" })}
          > */}
            Complain
          {/* </NavLink> */}
          <NavLink
            to="/profile"
            style={({ isActive }) => ({ color: isActive ? "red" : "" })}
          >
            Profile
          </NavLink>
          <NavLink
            to="/admin"
            style={({ isActive }) => ({ color: isActive ? "red" : "" })}
          >
            Admin
          </NavLink>
        </Flex>

        <DrawerRoot
          open={isOpen}
          onOpenChange={(value) => setIsOpen(value.open)}
        >
          <DrawerBackdrop />
          <DrawerTrigger asChild>
            {isOpen ? (
              <></>
            ) : (
              <Button
                variant="outline"
                size="sm"
                display={{ base: "flex", md: "none" }}
              >
                Menu
              </Button>
            )}
          </DrawerTrigger>

          <DrawerContent width={"200px"}>
            <DrawerHeader>
              <DrawerTitle>Menu</DrawerTitle>
            </DrawerHeader>

            <DrawerBody>
              <Flex gap={"2rem"} flexDir={"column"}>
                {/* <NavLink
                  to="/Complain"
                  style={({ isActive }) => ({ color: isActive ? "red" : "" })}
                > */}
                <Flex gap={"0.5rem"}>
                  <BiMessageAdd color="white" size={20} /> Complain
                </Flex>
                {/* </NavLink> */}
                <NavLink
                  to="/profile"
                  style={({ isActive }) => ({ color: isActive ? "red" : "" })}
                >
                  <Flex gap={"0.5rem"}>
                    <BsPerson color="white" size={20} /> Profile
                  </Flex>
                </NavLink>
                {/* <NavLink
                  to="/Logout"
                  style={({ isActive }) => ({ color: isActive ? "red" : "" })}
                > */}
                <Flex gap={"0.5rem"}>
                  <BiMessageAdd color="white" size={20} /> Logout
                </Flex>
                {/* </NavLink> */}
              </Flex>
            </DrawerBody>

            <DrawerCloseTrigger />
          </DrawerContent>
        </DrawerRoot>
      </Flex>

      <Box p={"2rem"}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default UserShopLayout;
