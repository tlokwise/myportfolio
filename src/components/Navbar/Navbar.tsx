//stylesheets
import classes from "./navbar-style.module.css";

//Chakra-UI  components
import { Box } from "@chakra-ui/react";

//Custom Components
import MenuLinks from "./MenuLinks/MenuLinks";
import DrawerMenu from "./DrawerMenu/DrawerMenu";
import UserInfo from "./UserInfo/UserInfo";

const Navbar = () => {
  return (
    <Box
      className={classes.navbar}
      alignItems={"center"}
      justifyContent={"space-around"}
    >
      <DrawerMenu />
      <UserInfo />
      <MenuLinks />
    </Box>
  );
};

export default Navbar;
