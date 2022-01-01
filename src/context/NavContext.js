import React, { createContext, useState } from "react";

export const NavContext = createContext();

const NavContextProvider = (props) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <NavContext.Provider value={{ isOpenMenu, setIsOpenMenu }}>
      {props.children}
    </NavContext.Provider>
  );
};

export default NavContextProvider;
