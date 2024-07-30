import { APIPaginatedResponse, NavigationLink } from "./responses";

export type Branch = {
  id: number;
  name: string;
  location: string;
};

export type TBranchContext = {
  branches: APIPaginatedResponse<Branch> | null;
  setBranches: (customers: APIPaginatedResponse<Branch> | null) => void;
  navigationLinks: NavigationLink[] | null;
  setNavigationLinks: (navigationLinks: NavigationLink[] | null) => void;
}

export type BranchProviderProps = {
  children: React.ReactNode;
}