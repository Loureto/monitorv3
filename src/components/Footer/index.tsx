import { Box, Flex, FlexProps, VStack } from "@chakra-ui/react";
import TextCustom from "../Text";

interface FooterProps extends FlexProps {
  show: boolean;
}

const Footer = ({ show, ...rest }: FooterProps) => {
  

  return (
    <Flex width="100%" justify="center" align="center" {...rest}>
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
        <Box>{''}</Box>
      )}
    </Flex>
  );
};

export default Footer;
