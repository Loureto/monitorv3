import {
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Stack,
} from "@chakra-ui/react";
import SkeletonClient from "@components/SkeletonClient";
import TextCustom from "@components/Text";
import { DashboardContext } from "@contexts/dashboardContext";
import { useContext } from "react";

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
          base: "1rem",
          xl: "1.5rem",
          "2xl": "2rem",
          "3xl": "2.25rem",
          "4xl": "2.5rem",
          "5xl": "3rem",
        }}
        lineHeight="38px"
      >
        Total de 12 tarefas pendentes
      </TextCustom>
      <Table className="tableCardClient" width="100%">
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
      </Table>
      <TableContainer overflowY="auto">
        <Table className="tableCardClient" width="100%" flex="1">
          <Tbody>
            {stateOrdersEcommerce === "success" &&
            ordersEcommerce.length > 0 ? (
              ordersEcommerce.map((item) => (
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
                      <Td className="subtitle">
                        {pendencie.clientName.split(" ").slice(0, 2).join(" ")}
                      </Td>
                      <Td className="subtitle">{pendencie.time}</Td>
                      <Td className="subtitle">{pendencie.type}asddddd</Td>
                    </>
                  ))}
                </Tr>
              ))
            ) : (
              <>{stateOrdersEcommerce === "loading" && <SkeletonClient />}</>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default CardTask;

{
  /* <Flex
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
          Nº da tarefa
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
          Tipo da tarefa
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
          Tipo do pedido
        </TextCustom>
      </Flex> */
}
