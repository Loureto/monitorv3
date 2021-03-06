import { FormEvent, useContext, useEffect, useState } from "react";
import {
  Button,
  Flex,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { AuthContext } from "@contexts/authContext";
import Head from "next/head";
import { setCookie } from "nookies";
import Loading from "src/components/Loading";
import InputCustom from "src/components/Input";
import TextCustom from "src/components/Text";
import ButtonCustom from "src/components/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const { signIn, loading } = useContext(AuthContext);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const data = { username, password };
    await signIn(data);
  }

  function changeName(value) {
    setUsername(value);
  }
  function changePassword(value) {
    setPassword(value);
  }

  function getMyLocation() {
    const location = window.navigator && window.navigator.geolocation;

    if (location) {
      location.getCurrentPosition((position) => {
        setCookie(null, "LAT", position.coords.latitude.toString());
        setCookie(null, "LONG", position.coords.longitude.toString());
      });
    }
  }

  useEffect(() => {
    getMyLocation();
  }, []);

  return (
    <>
      <Head>
        <title>Auth</title>
      </Head>
      <Loading state={loading} />
      <Flex
        width="100%"
        height="100vh"
        flex="1"
        flexDir="column"
        justify="center"
        align="center"
        bgGradient="linear-gradient(45deg, blue.600 0%, blue.500 100%)"
      >
        <Flex flexDir="column" marginBottom="60px" marginTop="-60px">
          <TextCustom
            fontSize="3rem"
            fontWeight="bold"
            fontStyle="normal"
            color="gray.50"
          >
            Jobs
          </TextCustom>
          <TextCustom
            marginTop="-20px"
            ml="auto"
            color="gray.50"
            fontWeight="bold"
            fontStyle="normal"
          >
            Petz
          </TextCustom>
        </Flex>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={handleSubmit}
        >
          <VStack spacing={4}>
            <InputCustom
              id="usuario"
              placeholder="Usu??rio"
              position="initial"
              onChange={({ target }) => changeName(target.value)}
              name="Usu??rio"
            />
            <InputGroup>
              <InputCustom
                id="senha"
                placeholder="Senha"
                type={!show ? "password" : "text"}
                position="initial"
                onChange={({ target }) => changePassword(target.value)}
                name="Senha"
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={handleClick}
                  padding={0}
                  mt={2}
                  ml={6}
                  colorScheme="none"
                  _focus={{ textDecor: "none" }}
                  _hover={{ bgColor: "none" }}
                >
                  {!show ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <ButtonCustom
              position="initial"
              width="340px"
              height="48px"
              show={true}
              color="black.500"
              bgColor="yellow.500"
              _hover={{ textDecor: "none" }}
              type="submit"
            >
              Entrar
            </ButtonCustom>
          </VStack>
        </form>
      </Flex>
    </>
  );
}
