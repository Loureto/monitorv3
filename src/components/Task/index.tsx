import { Flex } from "@chakra-ui/react";
import TextCustom from "@components/Text";
import { useState } from "react";
import Lista from "src/mock";

const Task = (props) => {
  return (
    <Flex width="100%" marginTop="16px" align="center" bgColor={props.bgColor}>
      <Flex
        width="16px"
        height={{ base: "60px", xl: "60px", "2xl": "79px" }}
        bgColor={props.color}
      ></Flex>

      <Flex width="100%" justify="space-between">
        <TextCustom
          ml={{ base: "40px", xl: "60px" }}
          fontStyle="normal"
          fontWeight="700"
          fontSize={{
            base: "1rem",
            xl: "1.5rem",
            "2xl": "2rem",
            "3xl": "2.25rem",
            "4xl": "2.5rem",
            "5xl": "3rem",
          }}
          lineHeight="38px"
        >
          {props.package}
        </TextCustom>
        <TextCustom
          fontStyle="normal"
          fontWeight="400"
          fontSize={{
            base: "1rem",
            xl: "1.5rem",
            "2xl": "2rem",
            "3xl": "2.25rem",
            "4xl": "2.5rem",
            "5xl": "3rem",
          }}
          lineHeight="38px"
          ml={{
            base: "25px",
            xl: "40px",
            "2xl": "70px",
            "3xl": "90px",
            "5xl": "120px",
          }}
        >
          {props.deadline}
        </TextCustom>
        <TextCustom
          mr={{ base: "10px", xl: "30px" }}
          fontStyle="normal"
          fontWeight="400"
          fontSize={{
            base: "1rem",
            xl: "1.5rem",
            "2xl": "2rem",
            "3xl": "2.25rem",
            "4xl": "2.5rem",
            "5xl": "3rem",
          }}
          lineHeight="38px"
        >
          {props.client}
        </TextCustom>
      </Flex>
    </Flex>
  );
};

export default Task;
