import classes from "../styles/home.module.css";
//chakra-ui components
import { Box, Text, Heading, Image, IconButton } from "@chakra-ui/react";

//react-icons
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div id="home" className={classes.home}>
      <Box className={classes.headerContainer}>
        <Text fontSize={"3rem"}>Hello, my name is</Text>
        <Heading fontSize={"5rem"} color={"var(--ocean-blue)"}>
          Mtlokwa Tsotetsi
        </Heading>
        <Text>I'm a FullStack React and Java Developer</Text>
        <Box className={classes.socialMediaLinks}>
          <IconButton
            aria-label={"LinkedIn"}
            icon={<FaLinkedin />}
            size={"lg"}
            margin={"10px"}
            // variant={"ghost"}
            color={"var(--ocean-blue)"}
          />
          <IconButton
            aria-label={"GitHub"}
            icon={<FaGithub />}
            size={"lg"}
            // variant={"ghost"}
            color={"var(--ocean-blue)"}
          />
        </Box>
      </Box>

      <Image
        className={classes.homeImage}
        src="/user_profile.jpeg"
        height={"100%"}
        width={"50%"}
      />
    </div>
  );
};

export default Home;
