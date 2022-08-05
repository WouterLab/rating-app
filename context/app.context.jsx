import { createContext, useState } from 'react';

export const AppContext = createContext({
  menu: [],
  firstCategory: 0,
});

export const AppContextProvider = ({menu, firstCategory, children}) => {
    const [menuState, setMenuState] = useState(menu)
    const setMenu = (newMenu) => {
        setMenuState(newMenu)
    }
  return <AppContext.Provider value={{menu: menuState, firstCategory, setMenu}}>{children}</AppContext.Provider>;
};
