import { createContext } from "react";

const HeaderContext = createContext();

export const HeaderContextProvider = HeaderContext.Provider;
export const HeaderContextConsumer = HeaderContext.Consumer;

export default HeaderContext;
