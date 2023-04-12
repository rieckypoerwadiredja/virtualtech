import { createContext } from "react";

const MenuContext = createContext();

export const MenuProvider = MenuContext.Provider;
export const MenuConsumer = MenuContext.Consumer;

export default MenuContext;
