import { createContext, useState, useMemo } from "react";
import {
  Customer,
  TCustomerContext,
  CustomerProviderProps,
} from "../types/customers";
import { APIPaginatedResponse, NavigationLink } from "../types/responses";

const defaultValue: TCustomerContext = {
  customers: null,
  setCustomers: () => {},
  navigationLinks: null,
  setNavigationLinks: () => {},
};

export const CustomerContext = createContext(defaultValue);

export const CustomerProvider = ({ children }: CustomerProviderProps) => {
  const [customers, setCustomers] = useState<APIPaginatedResponse<Customer> | null>(null);
  const [navigationLinks, setNavigationLinks] = useState<NavigationLink[] | null>(null);

  const value = useMemo(() => ({
    customers,
    setCustomers,
    navigationLinks,
    setNavigationLinks,
  }),
  [
    customers,
    navigationLinks,
  ]);

  return (
    <CustomerContext.Provider value={value}>
      {children}
    </CustomerContext.Provider>
  );
}
