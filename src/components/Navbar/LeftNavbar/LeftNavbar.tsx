import { Box, Avatar, Heading } from "@chakra-ui/react";
import classes from "../style.module.css";
Avatar;

const LeftNavbar = () => {
  return (
    <Box className={classes.leftNavbar}>
      <Avatar
        name="Mtlokwa Tsotetsi"
        src="/user_profile.jpeg"
        className={classes.avatar}
      />
      <Heading>Mtlokwa Tsotetsi</Heading>
    </Box>
  );
};

export default LeftNavbar;
