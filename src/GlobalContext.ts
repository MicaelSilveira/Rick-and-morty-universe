import React from "react";
interface ContextProps {
  mobileState: boolean;
  setMobileActive: React.Dispatch<React.SetStateAction<boolean>>;
}
export default React.createContext<ContextProps>({} as ContextProps);
