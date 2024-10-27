import { createContext } from "react";
import ShopData from "../assets/data.json";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { ShopData };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
