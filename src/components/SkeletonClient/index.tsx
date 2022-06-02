import { Flex, Skeleton } from "@chakra-ui/react";

const SkeletonClient = () => {
  return (
    <Flex width="100%" marginTop="16px" align="center">
      <Skeleton
        width="16px"
        height={{ base: "60px", xl: "60px", "2xl": "79px" }}
      />
      <Flex width="100%" justify="space-between">
        <Skeleton
          width={{
            base: "54px",
            xl: "80px",
            "2xl": "105px",
            "3xl": "120px",
            "4xl": "134px",
            "5xl": "164px",
          }}
          height="30px"
          ml={{ base: "40px", xl: "60px" }}
        />
        <Skeleton
          width={{
            base: "25px",
            xl: "50px",
            "2xl": "60px",
            "3xl": "70px",
            "4xl": "74px",
            "5xl": "90px",
          }}
          height="30px"
          ml={{
            base: "25px",
            xl: "40px",
            "2xl": "80px",
            "3xl": "90px",
            "5xl": "120px",
          }}
        />
        <Skeleton
          width={{
            base: "90px",
            xl: "130px",
            "2xl": "176px",
            "3xl": "194px",
            "4xl": "220px",
            "5xl": "260px",
          }}
          height="30px"
          mr={{ base: "10px", xl: "30px" }}
        />
      </Flex>
    </Flex>
  );
};

export default SkeletonClient;
