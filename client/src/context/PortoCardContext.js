import { createContext } from "react";

const PortoCardContext = createContext();

export const PortoCardProvider = PortoCardContext.Provider;
export const PortoCardConsumer = PortoCardContext.Consumer;

export default PortoCardContext;
