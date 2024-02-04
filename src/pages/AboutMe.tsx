//stylesheets
import classes from "../styles/abouteMe.module.css";
//chakra-ui components
import { Box, Heading, Text, Divider, Image } from "@chakra-ui/react";
//Custom Components
import Skills from "../components/AboutMe/Skills";
import InfoTable from "../components/AboutMe/InfoTable";

const AboutMe = () => {
  return (
    <Box id="about-me" className={classes.aboutMeContainer}>
      <Heading fontSize={"3rem"} className={classes.aboutMeHeader}>
        About Mtlokwa{" "}
      </Heading>
      <Box className={classes.aboutMeIntro}>
        <Image
          src="/user_profile.jpeg"
          boxSize={"250px"}
          marginRight={"25px"}
          className={classes.aboutMeImage}
        />
        <Box width={"98%"}>
          <Text className={classes.aboutMeText} overflowWrap={"revert"}>
            Hi there, my name is Mtlokwa Tsotetsi . I'm a Fullstack Web and Java
            Developer. I completed my Bachelor of Science in Information
            Technology in 2023 and I'm expecting to graduate mid-year (2023)
          </Text>
          <Divider marginTop={"20px"} />
          <InfoTable />
        </Box>
      </Box>
      <Skills />
    </Box>
  );
};

export default AboutMe;
