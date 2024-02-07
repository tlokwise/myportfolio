//stylesheets
import classes from "../navbar-style.module.css";

//Chakra-ui components
import { Box, Avatar, Text } from "@chakra-ui/react";

const DrawerMenuHeader = () => {
  return (
    <Box className={classes.drawerMenuHeaderContainer}>
      <Avatar src="/alexander-hipp.jpg" name="Mtlokwa Tsotets" />
      <Text paddingLeft={"10px"}>Mtlokwa Tsotetsi</Text>
    </Box>
  );
};

export default DrawerMenuHeader;
