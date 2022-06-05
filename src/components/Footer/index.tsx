import { Flex, FlexProps, Text, VStack } from "@chakra-ui/react";
import TextCustom from "../Text";

interface FooterProps extends FlexProps {
  show: boolean;
}

const Footer = ({ show, ...rest }: FooterProps) => {
  const date = new Intl.DateTimeFormat("pt-BR", {
    timeStyle: "medium",
  }).format();
  return (
    <Flex
      width="100%"
      justify={!show ? "flex-end" : "center"}
      px="20px"
      align={!show ? "initial" : "center"}
      {...rest}
    >
      {show ? (
        <VStack spacing="0.5rem">
          <TextCustom color="black.100">
            Se estiver com alguma dúvida, fale com um de nossos atendentes.
          </TextCustom>
          <TextCustom color="black.100">
            Copyright ® 2022 - Pet Center Comércio e Participações S/A Todos os
            direitos reservados
          </TextCustom>
        </VStack>
      ) : (
        <TextCustom
          color="blue.500"
          fontWeight="700"
          fontSize={{ base: "2.5rem", xl: "2.5rem", "2xl": "3rem" }}
        >
          {date}
        </TextCustom>
      )}
    </Flex>
  );
};

export default Footer;
