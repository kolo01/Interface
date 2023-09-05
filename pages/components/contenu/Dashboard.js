import {
  Box,
  Center,
  Flex,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    LineElement,
  } from "chart.js";
  import { Line } from "react-chartjs-2";

export default function Dashboard({numC,numF,numP}) {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Tooltip
      );
   



  return (
    <>
      <Box width={"100%"}>
        <Heading>Page Principale</Heading>
        <Flex width={"100%"} justify={"space-around"}>
          <Box bg={"gray.400"} p={3} borderRadius={"lg"} my={5}>
            <Text>Nombre de Client</Text>
            <Text>{numC}</Text>
          </Box>
          <Box bg={"gray.400"} p={3} borderRadius={"lg"} my={5}>
            <Text>Nombre de Fournisseur</Text>
            <Text>{numF}</Text>
          </Box>
          <Box bg={"gray.400"} p={3} borderRadius={"lg"} my={5}>
            <Text>Produits vendus</Text>
            <Text>{numP}</Text>
          </Box>
          <Box bg={"gray.400"} p={3} borderRadius={"lg"} my={5}>
            <Text>Gains mensuels</Text>
            <Text>0</Text>
          </Box>
          <Box bg={"gray.400"} p={3} borderRadius={"lg"} my={5}>
            <Text>Produits en stocks</Text>
            <Text>0</Text>
          </Box>
        </Flex>
        <Flex justify={"space-around"} mt={10}>
          <Box>
            <Text fontSize={"25px"} fontWeight={"semibold"}>
              Transactions récentes
            </Text>
            <TableContainer>
              <Table variant="striped" colorScheme="teal">
                <TableCaption>
                 
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td isNumeric>25.4</Td>
                  </Tr>
                  <Tr>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td isNumeric>30.48</Td>
                  </Tr>
                  <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td isNumeric>0.91444</Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </Box>
          <Box>
            <Text fontSize={"25px"} fontWeight={"semibold"}>
              Liste des dettes 
            </Text>
            <TableContainer>
              <Table variant="striped" colorScheme="teal">
                <TableCaption>
                 
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td isNumeric>25.4</Td>
                  </Tr>
                  <Tr>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td isNumeric>30.48</Td>
                  </Tr>
                  <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td isNumeric>0.91444</Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </Box>
        </Flex>
        <Center width={"95%"} display={"grid"} mb={20}>
        <h2>Bar Example (custom size)</h2>
        <Line
        data={{
          labels: [
            "Janvier",
            "Fevrier",
            "Mars",
            "Avril",
            "Mai",
            "Juin",
            "Juillet",
            "Aout",
            "Septembre",
            "Octobre",
            "Novembre",
            "Decembre",
          ],
          datasets: [
            {
              data: [100, 120, 115, 134, 168, 132, 200, 168, 132, 200, 132, 200],
              backgroundColor: "purple",
            },
          ],
        }}
      />
        </Center>
      </Box>
    </>
  );
}


