import { createContext } from "react";

const NavigationContext = createContext();

export const NavigationProvider = NavigationContext.Provider;
export const NavigationConsumer = NavigationContext.Consumer;

export default NavigationContext;
