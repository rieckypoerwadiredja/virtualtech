import { createContext, useContext } from "react";
// data
import jsonData from "../data/data.json";

const NavbarOpenContext = createContext();

function NavbarOpenPrivider({ children }) {
  return (
    <NavbarOpenContext.Provider value={jsonData.navigationOpen}>
      {children}
    </NavbarOpenContext.Provider>
  );
}
export const NavbarOpenState = () => {
  return useContext(NavbarOpenContext);
};

export default NavbarOpenPrivider;
