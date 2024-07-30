import { APIPaginatedResponse, NavigationLink } from "./responses";

export type FreightTable = {
  id: number;
  branch_id: number;
  customer_id: number;
  from_postcode: string;
  to_postcode: string;
  from_weight: number;
  to_weight: number;
  cost: number;
  name: string;
};

export type TFreightTableContext = {
  freightTables: APIPaginatedResponse<FreightTable> | null;
  setFreightTables: (freightTables: APIPaginatedResponse<FreightTable> | null) => void;
  navigationLinks: NavigationLink[] | null;
  setNavigationLinks: (navigationLinks: NavigationLink[] | null) => void;
}

export type FreightTableProviderProps = {
  children: React.ReactNode;
}