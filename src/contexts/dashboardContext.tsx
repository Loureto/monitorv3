import { createContext, useState } from "react";
import { Subsidiaries } from "src/types/subsidiary_types";
import { OrdersZeroCheckin } from "src/types/orders_types";
import { parseCookies } from "nookies";
import getSubsidiaries from "src/requests/subsidiaries";
import { State } from "src/types/state_machine_types";
import getOrdersZeroCheckin from "src/requests/orders_zero_checkin";
import { DashboardContextData } from "src/types/dashboard";
import { CleanOrders } from "src/requests/clean_orders";
import Router from "next/router";
import { OrdersEcommerce } from "src/types/orders_ecommerce";
import { getOrdersEcommerce } from "src/requests/orders_ecommerce";

export const DashboardContext = createContext({} as DashboardContextData);

export function DashboardProvider({ children }) {
  const [statusFilial, setStatusFilial] = useState<State>("idle");
  const [stateOrders, setStateOrders] = useState<State>("idle");
  const [stateOrdersEcommerce, setStateOrdersEcommerce] =
    useState<State>("idle");
  const [currentSubsidiary, setSubsidiary] = useState<string>();
  const [subsidiaries, setSubsidiaries] = useState<Subsidiaries>();
  const [ordersZeroCheckin, setOrdersZeroCheckin] = useState<
    OrdersZeroCheckin[]
  >([]);
  const [ordersEcommerce, setOrdersEcommerce] = useState<OrdersEcommerce[]>([]);
  const { PICKUP_SUB: sub, LAT: lat, LONG: long } = parseCookies();

  const fetchDataFilial = async () => {
    setStatusFilial("loading");
    const data = await getSubsidiaries(sub, lat, long);

    if (!data) {
      setStatusFilial("error");
      Router.replace("/unlinked");
    }
    setSubsidiary(data.nearSubsidiary.id);
    setSubsidiaries(data);
    setStatusFilial("success");
  };

  const fetchDataOrder = async () => {
    setStateOrders("loading");
    const { data: ordersCheckin } = await getOrdersZeroCheckin(
      currentSubsidiary
    );
    if (ordersCheckin?.length > 0) {
      console.log("Tem pedidos");
      setOrdersZeroCheckin(ordersCheckin);
      setStateOrders("success");
    } else {
      setStateOrders("error");
    }
  };

  const fetchDataOrderEcommerce = async () => {
    setStateOrdersEcommerce("loading");
    const data = await getOrdersEcommerce(currentSubsidiary);

    if (data?.length > 0) {
      console.log(data);
      setOrdersEcommerce(data);
    }
    setStateOrdersEcommerce("success");
  };

  const fetchDataCleanOrder = async () => {
    await CleanOrders(currentSubsidiary);
  };

  return (
    <DashboardContext.Provider
      value={{
        setSubsidiary,
        currentSubsidiary,
        subsidiaries,
        setSubsidiaries,
        ordersZeroCheckin,
        setOrdersZeroCheckin,
        fetchDataFilial,
        statusFilial,
        fetchDataOrder,
        stateOrders,
        fetchDataCleanOrder,
        fetchDataOrderEcommerce,
        stateOrdersEcommerce,
        ordersEcommerce,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
