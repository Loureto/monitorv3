import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ButtonCustomProps extends ButtonProps {
  children: ReactNode;
  show?: boolean;
}

const ButtonCustom = ({ children, show, ...rest }: ButtonCustomProps) => {
  return (
    <Button
      display={show ? "flex" : "none"}
      width="157px"
      height="48px"
      borderRadius="0.5rem"
      bgColor="blue.500"
      color="gray.50"
      fontWeight="700"
      fontStyle="normal"
      fontSize="1.25rem"
      lineHeight="1.5rem"
      alignItems="center"
      justifyContent="center"
      {...rest}
    >
      {children}
    </Button>
  );
};

export default ButtonCustom;
