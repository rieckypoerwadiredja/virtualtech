import { createContext } from "react";

const HeaderContext = createContext();

export const HeaderProvider = HeaderContext.Provider;
export const HeaderConsumer = HeaderContext.Consumer;

export default HeaderContext;
