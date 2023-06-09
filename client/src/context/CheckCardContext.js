import { createContext } from "react";

const CheckCardContext = createContext();

export const CheckCardProvider = CheckCardContext.Provider;
export const CheckCardConsumer = CheckCardContext.Consumer;

export default CheckCardContext;
