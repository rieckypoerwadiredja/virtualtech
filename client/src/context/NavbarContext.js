import { createContext, useContext } from "react";
// data
import jsonData from "../data/data.json";

const NavbarContext = createContext();

function NavbarPrivider({ children }) {
  return (
    <NavbarContext.Provider value={jsonData.navigation}>
      {children}
    </NavbarContext.Provider>
  );
}
export const NavbarState = () => {
  return useContext(NavbarContext);
};

export default NavbarPrivider;
