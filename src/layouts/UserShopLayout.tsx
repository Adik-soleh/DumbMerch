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
        bgColor={"#181818"}
      >
        <Image
          src={Frame}
          boxSize={"40px"}
          onClick={() => navigate("/")}
          cursor="pointer"
        />

        <Flex gap={"1rem"} display={{ base: "none", md: "flex" }}>
          <NavLink
            to="/Complain"
            style={({ isActive }) => ({ color: isActive ? "red" : "" })}
          >
            Complain
          </NavLink>
          <NavLink
            to="/profile"
            style={({ isActive }) => ({ color: isActive ? "red" : "" })}
          >
            Profile
          </NavLink>
          <NavLink
            to="/Logout"
            style={({ isActive }) => ({ color: isActive ? "red" : "" })}
          >
            Logout
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

          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Menu</DrawerTitle>
            </DrawerHeader>

            <DrawerBody>
              <Flex gap={"1rem"}>
                <NavLink
                  to="/Complain"
                  style={({ isActive }) => ({ color: isActive ? "red" : "" })}
                >
                  Complain
                </NavLink>
                <NavLink
                  to="/profile"
                  style={({ isActive }) => ({ color: isActive ? "red" : "" })}
                >
                  Profile
                </NavLink>
                <NavLink
                  to="/Logout"
                  style={({ isActive }) => ({ color: isActive ? "red" : "" })}
                >
                  Logout
                </NavLink>
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
