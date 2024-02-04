//stylesheet
import classes from "./skills.module.css";
//Chakra-ui components
import { Heading, Box, Text, Button } from "@chakra-ui/react";
//react-icons
import { TbDeviceDesktopCode } from "react-icons/tb";
import { FaJava, FaDev } from "react-icons/fa";

const Skills = () => {
  return (
    <div className={classes.skillsContainer}>
      <Heading fontSize={"3rem"} className={classes.skillsHeader}>
        Skilled In
      </Heading>
      <Box className={classes.skillsBox}>
        <Box className={classes.webDevSkill}>
          <TbDeviceDesktopCode size={"80px"} />
          <Heading marginY={"20px"}>Web Development</Heading>
          <Text textAlign={"center"} marginBottom={"20px"}>
            I have experience in Fullstack Web Development. Proficient in React,
            <br />
            Next.js, Express.js and familiar with Bootstrap
          </Text>
          <Button>View Projects</Button>
        </Box>

        <Box className={classes.javaSkill}>
          <FaJava size={"80px"} />
          <Heading marginY={"20px"}>Java Development</Heading>
          <Text textAlign={"center"} marginBottom={"20px"}>
            Proficient in Java ecosystem. Also seasoned in Java EE <br /> and
            Spring Boot Framework
          </Text>
          <Button>View Projects</Button>
        </Box>

        <Box className={classes.devOpsSkill}>
          <FaDev size={"80px"} />
          <Heading marginY={"20px"} marginBottom={"20px"}>
            DevOps
          </Heading>
          <Text textAlign={"center"}>
            My skills include a grasp of essential DevOps concepts, <br />
            CI/CD pipelines using Docker
          </Text>
          <Button>View Projects</Button>
        </Box>
      </Box>
    </div>
  );
};

export default Skills;
