import { Link, Box, Button } from "@chakra-ui/react";

//stylesheets
import classes from "../style.module.css";

const RightNavbar = () => {
  return (
    <Box className={classes.rightNavbar}>
      <Link href="#" className={classes.link}>
        Home
      </Link>
      <Link href="#about-me" className={classes.link}>
        About Me
      </Link>
      <Link href="#projects" className={classes.link}>
        Projects
      </Link>
      <Link href="#resume" className={classes.link}>
        Resume
      </Link>

      <Button className={classes.hireMeBtn} variant={"outline"}>
        Hire Me!
      </Button>
    </Box>
  );
};

export default RightNavbar;
