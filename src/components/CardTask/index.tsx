import { Flex } from "@chakra-ui/react";
import TextCustom from "@components/Text";

const CardTask = () => {
  return (
    <Flex width="60%" flexDir="column">
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
      </Flex>
    </Flex>
  );
};

export default CardTask;
