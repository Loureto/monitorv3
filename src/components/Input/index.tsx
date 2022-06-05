import { Input, InputProps } from "@chakra-ui/react";

const InputCustom = ({ name, ...rest }: InputProps) => {
  return (
    <Input
      width="340px"
      height="50px"
      fontWeight="medium"
      lineHeight="17px"
      variant="filled"
      bgColor="rgba(255,255,255, 0.2)"
      _hover={{ textDecor: "none" }}
      _focus={{ bgColor: "rgba(255,255,255, 0.2)" }}
      _placeholder={{ color: "gray.50" }}
      {...rest}
    />
  );
};

export default InputCustom;
