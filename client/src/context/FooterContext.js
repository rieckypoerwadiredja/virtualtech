import { createContext } from "react";

const FooterContext = createContext();

export const FooterProvider = FooterContext.Provider;
export const FooterComsumer = FooterContext.Consumer;

export default FooterContext;
