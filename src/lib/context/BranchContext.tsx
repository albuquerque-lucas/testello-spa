import { createContext, useState, useMemo } from "react";
import {
  Branch,
  TBranchContext,
  BranchProviderProps,
} from "../types/branches";
import { APIPaginatedResponse, NavigationLink } from "../types/responses";

const defaultValue: TBranchContext = {
  branches: null,
  setBranches: () => {},
  navigationLinks: null,
  setNavigationLinks: () => {},
};

export const BranchContext = createContext(defaultValue);

export const BranchProvider = ({ children }: BranchProviderProps) => {
  const [branches, setBranches] = useState<APIPaginatedResponse<Branch> | null>(null);
  const [navigationLinks, setNavigationLinks] = useState<NavigationLink[] | null>(null);

  const value = useMemo(() => ({
    branches,
    setBranches,
    navigationLinks,
    setNavigationLinks,
  }),
  [
    branches,
    navigationLinks,
  ]);

  return (
    <BranchContext.Provider value={value}>
      {children}
    </BranchContext.Provider>
  );
}
