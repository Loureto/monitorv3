import { Link, LinkProps } from "@chakra-ui/react";

const LinkCustom = ({ children, ...rest }: LinkProps) => {
  return <Link {...rest}>{children}</Link>;
};

export default LinkCustom;
