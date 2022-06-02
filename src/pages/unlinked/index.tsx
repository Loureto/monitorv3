import Router from "next/router";
import { Flex } from "@chakra-ui/react";
import Header from "@components/Header";
import TextCustom from "src/components/Text";
import LinkCustom from "src/components/Link";
import ButtonCustom from "src/components/Button";
import Footer from "src/components/Footer";
import { IoWarningOutline } from "react-icons/io5";
import { withSSRAuth } from "@utils/withSSRAuth";

const Unlinked = () => {
  const handleClick = () => Router.replace("/");

  return (
    <Flex width="100%" height="100vh" flex="1" flexDir="column">
      <Header showItem={false} />
      <Flex
        flex="1"
        textAlign="center"
        flexDir="column"
        align="center"
        justify="center"
      >
        <IoWarningOutline style={{ width: "87.07px", height: "75.43px" }} />
        <TextCustom
          fontStyle="normal"
          fontWeight="700"
          fontSize={{ base: "2.25rem", "2xl": "2.5rem", "3xl": "3rem" }}
          lineHeight="3rem"
          marginTop="1.75rem"
        >
          Ops! Este usuário não está vinculado
          <br /> a nenhuma loja.
        </TextCustom>
        <TextCustom
          fontStyle="normal"
          fontWeight="400"
          fontSize="1.5rem"
          lineHeight="2rem"
          marginTop="0.5rem"
        >
          Por favor, tente novamente com outro usuário ou entre em <br />
          contato com o suporte via chamado{" "}
          <LinkCustom textDecor="underline" color="blue.500" fontWeight="700">
            GLPI
          </LinkCustom>
          .
        </TextCustom>
        <ButtonCustom
          show={true}
          width="383px"
          height="48px"
          marginTop="2.5rem"
          onClick={() => handleClick()}
        >
          Entendi
        </ButtonCustom>
      </Flex>
      <Footer show={true} pb="39.4px" />
    </Flex>
  );
};

export default Unlinked;

export const getServerSideProps = withSSRAuth;
