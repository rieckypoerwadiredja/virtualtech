import { createContext } from "react";

const MainContext = createContext();

export const MainProvider = MainContext.Provider;
export const MainConsumer = MainContext.Consumer;

export default MainContext;
