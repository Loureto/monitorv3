import { createContext, useState } from "react";
import { Subsidiaries } from "src/types/subsidiary_types";
import { OrdersZeroCheckin } from "src/types/orders_types";

export interface DashboardContextData {
  setSubsidiary: (value: string) => void;
  currentSubsidiary: string;
  setSubsidiaries: (value: Subsidiaries) => void;
  subsidiaries: Subsidiaries;
  ordersZeroCheckin: OrdersZeroCheckin[];
  setOrdersZeroCheckin: (value: OrdersZeroCheckin[]) => void;
}

export const DashboardContext = createContext({} as DashboardContextData);

export function DashboardProvider({ children }) {
  const [currentSubsidiary, setSubsidiary] = useState<string>();
  const [subsidiaries, setSubsidiaries] = useState<Subsidiaries>();
  const [ordersZeroCheckin, setOrdersZeroCheckin] = useState<
    OrdersZeroCheckin[]
  >([]);

  return (
    <DashboardContext.Provider
      value={{
        setSubsidiary,
        currentSubsidiary,
        subsidiaries,
        setSubsidiaries,
        ordersZeroCheckin,
        setOrdersZeroCheckin,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
