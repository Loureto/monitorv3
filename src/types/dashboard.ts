import { OrdersEcommerce } from "./orders_ecommerce";
import { OrdersZeroCheckin } from "./orders_types";
import { Subsidiaries } from "./subsidiary_types";

export interface DashboardContextData {
  setSubsidiary: (value: string) => void;
  currentSubsidiary: string;
  setSubsidiaries: (value: Subsidiaries) => void;
  subsidiaries: Subsidiaries;
  ordersZeroCheckin: OrdersZeroCheckin[];
  setOrdersZeroCheckin: (value: OrdersZeroCheckin[]) => void;
  fetchDataFilial: () => Promise<void>;
  statusFilial: string;
  fetchDataOrder: () => Promise<void>;
  stateOrders: string;
  fetchDataCleanOrder: () => Promise<void>;
  fetchDataOrderEcommerce: () => Promise<void>;
  stateOrdersEcommerce: string;
  ordersEcommerce: OrdersEcommerce[];
}
