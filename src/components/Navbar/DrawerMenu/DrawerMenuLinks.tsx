const linkList: Array<{ title: string; link: string }> = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "About Me",
    link: "#about-me",
  },
  {
    title: "Projects",
    link: "#about-me",
  },
  {
    title: "Resume",
    link: "#about-me",
  },
];

//Stylesheets
import classes from "../navbar-style.module.css";

//Chakra-ui
import { Box, Link, Button } from "@chakra-ui/react";

const DrawerMenuLinks = () => {
  return (
    <Box className={classes.drawerMenuLinks}>
      {linkList.map((link, index: number) => {
        return (
          <Link
            key={index}
            href={link.link}
            className={classes.link}
            _hover={classes.link}
          >
            {link.title}
          </Link>
        );
      })}

      <Button
        className={classes.hireMeBtn}
        variant={"outline"}
        _hover={classes.hireMeBtn}
      >
        Hire Me!
      </Button>
    </Box>
  );
};

export default DrawerMenuLinks;
