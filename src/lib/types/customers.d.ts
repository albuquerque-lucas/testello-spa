import { APIPaginatedResponse, NavigationLink } from "./responses";

export type Customer = {
  id: number;
  name: string;
};

export type CustomerContext = {
  customers: APIPaginatedResponse<Customer>;
  setCustomers: (customers: APIPaginatedResponse<Customer> | null) => void;
  navigationLinks: NavigationLink[];
  setNavigationLinks: (navigationLinks: NavigationLink[] | null) => void;
}