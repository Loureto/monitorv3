import { Text, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface TextCustomProps extends TextProps {
  children: ReactNode;
}

const TextCustom = ({ children, ...rest }: TextCustomProps) => {
  return <Text {...rest}>{children}</Text>;
};

export default TextCustom;
