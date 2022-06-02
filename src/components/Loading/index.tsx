import { Flex, Spinner } from "@chakra-ui/react";
import { ModalProps } from "src/types/state_machine_types";

function Loading({ state }: ModalProps) {
  if (state) {
    return (
      <Flex
        width="100%"
        height="100vh"
        flex="1"
        position="absolute"
        bg="rgba(255,255,255, 0.3)"
        align="center"
        justify="center"
        zIndex="1000"
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    );
  }
  return null;
}

export default Loading;
