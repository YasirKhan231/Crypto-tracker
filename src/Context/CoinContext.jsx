import { createContext } from "react";

export const CoinContext = createContext;

const CoinContextProvider = (props) => {
  const constextvalue = {};
  return (
    <CoinContext.Provider value={constextvalue}>
      {props.children}
    </CoinContext.Provider>
  );
};
