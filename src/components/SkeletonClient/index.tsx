import {
  Flex,
  Skeleton,
  Tab,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";

const SkeletonClient = () => {
  return (
    <Flex>
      <Skeleton width="16px" height="96px" />
    </Flex>
  );
};

export default SkeletonClient;
