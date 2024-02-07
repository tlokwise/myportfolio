//Stylesheets
import classes from "../navbar-style.module.css";
//Chakra-ui components
import { Box, Avatar, Text } from "@chakra-ui/react";
const UserInfo = () => {
  return (
    <Box className={classes.userInfo}>
      <Avatar src="/alexander-hipp.jpg" />
      <Text fontSize={"25px"} fontWeight={"800"}>
        Mtlokwa Tsotetsi
      </Text>
    </Box>
  );
};

export default UserInfo;
