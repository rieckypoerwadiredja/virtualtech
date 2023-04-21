import { createContext } from "react";

const SliderCardContext = createContext();

export const SliderCardProvider = SliderCardContext.Provider;
export const SliderCardConsumer = SliderCardContext.Consumer;

export default SliderCardContext;
