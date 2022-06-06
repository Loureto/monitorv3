import { useContext, useEffect, useState } from "react";
import {
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import SkeletonClient from "@components/SkeletonClient";
import TextCustom from "@components/Text";
import { DashboardContext } from "@contexts/dashboardContext";

const CardClient = () => {
  const { ordersZeroCheckin, stateOrders } = useContext(DashboardContext);

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
          base: "1.25rem",
          xl: "1.5rem",
          "2xl": "2rem",
          "3xl": "2.25rem",
          "4xl": "2.5rem",
          "5xl": "3rem",
        }}
        lineHeight="38px"
      >
        {`Total de ${stateOrders === "loading" ? "0" : 0} clientes pendentes `}
      </TextCustom>

      <TableContainer overflowY="auto">
        {stateOrders === "success" && ordersZeroCheckin.length > 0 && (
          <Table
            className="tableCardClient"
            width="100%"
            flex="1"
            boxSizing="border-box"
          >
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
            {ordersZeroCheckin.map((item) => (
              <Tbody key={item.customerId}>
                {item.pendencies.map((pendencie) => (
                  <Tr key={pendencie.clientId}>
                    <Td
                      className="subtitleCode"
                      boxShadow={`16px 0px 0px 0px ${pendencie.labelButton.collorButton} inset`}
                    >
                      {pendencie.codeERP}
                    </Td>
                    <Td className="subtitle">{pendencie.time}</Td>
                    <Td className="subtitle">
                      {pendencie?.clientName?.split(" ").slice(0, 2).join(" ")}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            ))}
          </Table>
        )}

        {stateOrders === "loading" && <SkeletonClient />}
      </TableContainer>
    </Flex>
  );
};

export default CardClient;
