import { useContext, useEffect } from "react";
import {
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Tabs,
  Tab,
  VStack,
} from "@chakra-ui/react";
import SkeletonClient from "@components/SkeletonClient";
import TextCustom from "@components/Text";
import { DashboardContext } from "@contexts/dashboardContext";

const CardClient = () => {
  const { currentSubsidiary, ordersZeroCheckin, stateOrders } =
    useContext(DashboardContext);

  useEffect(() => {
    console.log({ ordersZeroCheckin });
  }, [ordersZeroCheckin]);

  return (
    <Flex width="100%" maxWidth="40%" flexDir="column" boxSizing="border-box">
      <TextCustom
        margin="32px 0 16px 0"
        color="black.500"
        fontStyle="normal"
        fontWeight="500"
        fontSize={{
          base: "1rem",
          xl: "1.5rem",
          "2xl": "2rem",
          "3xl": "2.25rem",
          "4xl": "2.5rem",
          "5xl": "3rem",
        }}
        lineHeight="38px"
      >
        {`Total de clientes pendentes ${
          stateOrders === "idle" || stateOrders === "loading"
            ? ""
            : currentSubsidiary
        }`}
      </TextCustom>

      <Table className="tableCardClient" width="100%" boxSizing="border-box">
        <Thead bgColor="blue.500">
          <Tr>
            <Th className="title">Nº do pacote</Th>
            <Th className="title" textAlign="center">
              Prazo
            </Th>
            <Th className="title" textAlign="center">
              Cliente
            </Th>
          </Tr>
        </Thead>
      </Table>

      <TableContainer overflowY="auto">
        <Table
          className="tableCardClient"
          width="100%"
          flex="1"
          boxSizing="border-box"
        >
          <Tbody>
            {stateOrders === "success" && ordersZeroCheckin.length > 0 ? (
              ordersZeroCheckin.map((item) => (
                <Tr key={item.customerId}>
                  {item.pendencies.map((pendencie) => (
                    <>
                      <Td
                        className="subtitleCode"
                        key={pendencie.clientId}
                        boxShadow={`16px 0px 0px 0px ${pendencie.labelButton.collorButton} inset`}
                      >
                        {pendencie.codeERP}
                      </Td>
                      <Td className="subtitle">{pendencie.time}</Td>
                      <Td className="subtitle">
                        {pendencie?.clientName
                          ?.split(" ")
                          .slice(0, 2)
                          .join(" ")}
                      </Td>
                    </>
                  ))}
                </Tr>
              ))
            ) : (
              <>{stateOrders === "loading" && <SkeletonClient />}</>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default CardClient;

{
  /* <TextCustom
        margin="32px 0 16px 0"
        color="black.500"
        fontStyle="normal"
        fontWeight="500"
        fontSize={{
          base: "1rem",
          xl: "1.5rem",
          "2xl": "2rem",
          "3xl": "2.25rem",
          "4xl": "2.5rem",
          "5xl": "3rem",
        }}
        lineHeight="38px"
      >
        {`Total de ${count} clientes pendentes ${
          status === "idle" || status === "loading" ? "" : currentSubsidiary
        }`}
      </TextCustom>
      <Flex
        width="100%"
        bgColor="blue.500"
        justify="space-between"
        padding={{
          base: "0px 30px 0px 20px",
          xl: "0px 55px 0px 20px",
          "2xl": "20px 55px 20px 20px",
          "3xl": "20px 65px 20px 20px",
          "4xl": "20px 80px 20px 20px",
        }}
      >
        <TextCustom
          color="gray.50"
          fontWeight="700"
          fontSize={{
            base: "1rem",
            xl: "1.5rem",
            "2xl": "2rem",
            "3xl": "2.25rem",
            "4xl": "2.5rem",
            "5xl": "3rem",
          }}
          lineHeight="38px"
        >
          Nº do pacote
        </TextCustom>
        <TextCustom
          color="gray.50"
          fontWeight="700"
          fontSize={{
            base: "1rem",
            xl: "1.5rem",
            "2xl": "2rem",
            "3xl": "2.25rem",
            "4xl": "2.5rem",
            "5xl": "3rem",
          }}
          lineHeight="38px"
        >
          Prazo
        </TextCustom>
        <TextCustom
          color="gray.50"
          fontWeight="700"
          fontSize={{
            base: "1rem",
            xl: "1.5rem",
            "2xl": "2rem",
            "3xl": "2.25rem",
            "4xl": "2.5rem",
            "5xl": "3rem",
          }}
          lineHeight="38px"
        >
          Cliente
        </TextCustom>
      </Flex> */
}
