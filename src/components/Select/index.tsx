import { Select, SelectProps } from "@chakra-ui/react";

interface SelectCustomProps extends SelectProps {
  show?: boolean;
}

const SelectCustom = ({ show, ...rest }: SelectCustomProps) => {
  return (
    <Select
      display={show ? "block" : "none"}
      width="147px"
      height="48px"
      bg="blue.500"
      color="gray.50"
      fontSize="1.25rem"
      fontWeight="700"
      line-height="1.5rem"
      borderRadius="0.5rem"
      {...rest}
    ></Select>
  );
};

export default SelectCustom;
