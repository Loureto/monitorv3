/* eslint-disable react-hooks/exhaustive-deps */
import { Flex, Stack } from "@chakra-ui/react";
import CardClient from "@components/CardClient";
import CardTask from "@components/CardTask";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { withSSRAuth } from "@utils/withSSRAuth";
import { useContext, useEffect } from "react";
import { DashboardContext } from "@contexts/dashboardContext";

const Dashboard = () => {
  const {
    currentSubsidiary,
    fetchDataFilial,
    statusFilial,
    fetchDataOrder,
    stateOrders,
    fetchDataCleanOrder,
  } = useContext(DashboardContext);

  useEffect(() => {
    fetchDataFilial();

    setInterval(() => {
      var date = new Date();
      var dateConf = `${date}`;
      var result = dateConf.split(" ");
      if (result[4] === "00:00:00") {
        fetchDataCleanOrder();
      }
    }, 1000);
  }, []);

  useEffect(() => {
    fetchDataOrder();
  }, [currentSubsidiary]);

  return (
    <Flex width="100%" height="100vh" flex="1" flexDir="column" align="center">
      <Header showItem={true} status={statusFilial} />

      <Flex width="100%" px="1.25rem" flex="1">
        <Stack direction="row" width="100%" spacing="32px" flex="1">
          <CardClient status={stateOrders} />
          <CardTask />
        </Stack>
      </Flex>
      <Footer show={false} height="141px" />
    </Flex>
  );
};

export default Dashboard;

export const getServerSideProps = withSSRAuth;
