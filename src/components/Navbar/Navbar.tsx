//Chakra-UI  components
import { Flex } from "@chakra-ui/react";

import RightNavbar from "./RightNavbar/RightNavbar";
import LeftNavbar from "./LeftNavbar/LeftNavbar";
import classes from "./style.module.css";
const Navbar = () => {
  return (
    <Flex
      className={classes.navbar}
      alignItems={"center"}
      justifyContent={"space-around"}
    >
      <LeftNavbar />
      <RightNavbar />
    </Flex>
  );
};

export default Navbar;
