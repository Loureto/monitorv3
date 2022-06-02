import { Flex } from "@chakra-ui/react";
import SkeletonClient from "@components/SkeletonClient";
import Task from "@components/Task";
import TextCustom from "@components/Text";
import { DashboardContext } from "@contexts/dashboardContext";
import { useContext, useEffect } from "react";

interface CardClientProps {
  status: string;
}

const CardClient = ({ status }: CardClientProps) => {
  const { currentSubsidiary, ordersZeroCheckin } = useContext(DashboardContext);
  useEffect(() => {
    console.log({ ordersZeroCheckin });
  }, [ordersZeroCheckin]);
  let count = 1;

  return (
    <Flex width="40%" flexDir="column">
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
      </Flex>

      {/* {Array(8).map((key) => (
        <SkeletonClient key={key} />
      ))} */}
      {/* {status === "success" &&
        ordersZeroCheckin.length > 0 &&
        ordersZeroCheckin[0].pendencies.map((item) => (
          <div key={item.clientId}>Test</div>
        ))} */}

      {status === "success" && ordersZeroCheckin.length > 0 ? (
        ordersZeroCheckin.map(({ pendencies, customerId }) => (
          <div key={customerId}>
            {pendencies.map((pendencie) => {
              <div key={pendencie.clientId}>teste2</div>;
              // <Task
              //   key={pendencie.clientId}
              //   package={pendencie.codeERP}
              //   deadline={pendencie.createdTime}
              //   client={pendencie.clientName}
              //   color={pendencie.labelButton.collorButton}
              //   bgColor="gray.100"
              // />;
            })}
          </div>
        ))
      ) : (
        <SkeletonClient />
      )}
    </Flex>
  );
};

export default CardClient;
