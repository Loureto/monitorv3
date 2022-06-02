/* eslint-disable react-hooks/exhaustive-deps */
import { Flex, Stack } from "@chakra-ui/react";

import CardClient from "@components/CardClient";
import CardTask from "@components/CardTask";
import Header from "@components/Header";
import Footer from "@components/Footer";

import { withSSRAuth } from "@utils/withSSRAuth";
import { useContext, useEffect, useState } from "react";
import getSubsidiaries from "src/requests/subsidiaries";
import { parseCookies } from "nookies";
import { State } from "src/types/state_machine_types";
import getOrdersZeroCheckin from "src/requests/orders_zero_checkin";
import { CleanOrders } from "src/requests/clean_orders";
import { DashboardContext } from "@contexts/dashboardContext";

const Dashboard = () => {
  const [status, setStatus] = useState<State>("idle");
  const [stateOrders, setStateOrders] = useState<State>("idle");
  const {
    setSubsidiary,
    currentSubsidiary,
    setSubsidiaries,
    setOrdersZeroCheckin,
  } = useContext(DashboardContext);
  const { PICKUP_SUB: sub, LAT: lat, LONG: long } = parseCookies();

  const getFilial = async () => {
    setStatus("loading");
    const data = await getSubsidiaries(sub, lat, long);

    if (!data) {
      return setStatus("error");
    }
    setSubsidiary(data.nearSubsidiary.id);
    setSubsidiaries(data);
    setStatus("success");
  };

  const fetchData = async () => {
    setStateOrders("loading");
    const { data: zeroCheckin } = await getOrdersZeroCheckin(currentSubsidiary);
    if (zeroCheckin?.length!!) {
      console.log("Nao ha pedidos");
      // setOrdersZeroCheckin(zeroCheckin);
      setOrdersZeroCheckin(zeroCheckin);
    }
    console.log(zeroCheckin);
    setStateOrders("success");
  };

  useEffect(() => {
    getFilial();

    setInterval(() => {
      var date = new Date();
      var dateConf = `${date}`;
      var result = dateConf.split(" ");
      if (result[4] === "00:00:00") {
        CleanOrders(currentSubsidiary);
      }
    }, 1000);
  }, []);

  useEffect(() => {
    fetchData();
  }, [currentSubsidiary]);

  return (
    <Flex width="100%" height="100vh" flex="1" flexDir="column" align="center">
      <Header showItem={true} status={status} />

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
