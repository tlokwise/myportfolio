//stylesheets
import classes from "./infoTable.module.css";
//chakra-ui components
import { Table, Tbody, Tr, Td, Button } from "@chakra-ui/react";

const InfoTable = () => {
  return (
    <Table variant={"unstyled"}>
      <Tbody>
        <Tr>
          <Td>
            <span className={classes.tableIndex}>Name: </span> Mtlokwa Tsotetsi
          </Td>
          <Td>
            <span className={classes.tableIndex}>From: </span> Midrand, Gauteng
          </Td>
        </Tr>
        <Tr>
          <Td>
            <span className={classes.tableIndex}>Age: </span>24
          </Td>
          <Td>
            <span className={classes.tableIndex}>Email: </span>
            mtlokwatsotetsi@outlook.com
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Button colorScheme="teal">Download CV</Button>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default InfoTable;
