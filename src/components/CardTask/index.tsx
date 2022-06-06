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
import { useContext, useEffect, useState } from "react";

const CardTask = () => {
  const { stateOrdersEcommerce, ordersEcommerce } =
    useContext(DashboardContext);

  return (
    <Flex width="100%" maxWidth="60%" flexDir="column" flex="1">
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
        {`Total de ${
          stateOrdersEcommerce === "loading" ? 0 : 0
        } tarefas pendentes`}
      </TextCustom>
      <TableContainer overflowY="auto">
        {stateOrdersEcommerce === "success" && ordersEcommerce.length > 0 && (
          <Table className="tableCardClient" width="100%" flex="1">
            <Thead bgColor="blue.500">
              <Tr>
                <Th className="title">Nº da tarefa</Th>
                <Th className="title" textAlign="center">
                  Tipo de tarefa
                </Th>
                <Th className="title" textAlign="center">
                  Prazo
                </Th>
                <Th className="title" textAlign="center">
                  Tipo do pedido
                </Th>
              </Tr>
            </Thead>
            {ordersEcommerce.map((item) => (
              <Tbody key={item.customerId}>
                {item.pendencies.map((pendencie) => (
                  <Tr
                    key={pendencie.codeERP + item.customerId}
                    paddingTop="10px"
                  >
                    <Td
                      className="subtitleCode"
                      borderLeft="16px solid black"
                      marginTop="20px"
                    >
                      {pendencie.codeERP}
                    </Td>
                    <Td className="subtitle">
                      {pendencie.clientName.split(" ").slice(0, 2).join(" ")}
                    </Td>
                    <Td className="subtitle">{pendencie.time}</Td>
                    <Td className="subtitle">{pendencie.type}</Td>
                  </Tr>
                ))}
              </Tbody>
            ))}
          </Table>
        )}
        {stateOrdersEcommerce === "loading" && <SkeletonClient />}
      </TableContainer>
    </Flex>
  );
};

export default CardTask;
