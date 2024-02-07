//Stylesheets
import classes from "../navbar-style.module.css";
//Chakra-ui components
import { Box, Text } from "@chakra-ui/react";

const DrawerMenuFooter = () => {
  return (
    <Box className={classes.drawerMenuFooter}>
      <Text> &copy; tlokwisedev</Text>
    </Box>
  );
};

export default DrawerMenuFooter;
