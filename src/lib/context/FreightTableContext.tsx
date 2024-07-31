import { createContext, useState, useMemo } from "react";
import {
  FreightTable,
  TFreightTableContext,
  FreightTableProviderProps,
} from "../types/freightTables";
import { APIPaginatedResponse, NavigationLink } from "../types/responses";

const defaultValue: TFreightTableContext = {
  freightTables: null,
  setFreightTables: () => {},
  navigationLinks: null,
  setNavigationLinks: () => {},
};

export const FreightTableContext = createContext(defaultValue);

export const FreightTableProvider = ({ children }: FreightTableProviderProps) => {
  const [freightTables, setFreightTables] = useState<APIPaginatedResponse<FreightTable> | null>(null);
  const [navigationLinks, setNavigationLinks] = useState<NavigationLink[] | null>(null);

  const value = useMemo(() => ({
    freightTables,
    setFreightTables,
    navigationLinks,
    setNavigationLinks,
  }),
  [
    freightTables,
    navigationLinks,
  ]);

  return (
    <FreightTableContext.Provider value={value}>
      {children}
    </FreightTableContext.Provider>
  );
}
