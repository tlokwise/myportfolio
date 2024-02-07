"use client";
//stylesheets
import classes from "../navbar-style.module.css";

//
import { useDisclosure } from "@chakra-ui/react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
} from "@chakra-ui/react";

//react-icons
import { MdOutlineMenu } from "react-icons/md";

//Custom Components
import DrawerMenuHeader from "./DrawerMenuHeader";
import DrawerMenuLinks from "./DrawerMenuLinks";
import DrawerMenuFooter from "./DrawerMenuFooter";

const DrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box className={classes.drawerMenu}>
      <IconButton
        className={classes.drawerBtn}
        _hover={classes.drawerBtn}
        variant={"ghost"}
        size={"20px"}
        aria-label={""}
        icon={<MdOutlineMenu size={"40px"} />}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <DrawerMenuHeader />
          </DrawerHeader>

          <DrawerBody>
            <DrawerMenuLinks />
          </DrawerBody>

          <DrawerFooter>
            <DrawerMenuFooter />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default DrawerMenu;
