import PropTypes from "prop-types";
import {createContext, useState} from "react";

// Create the context
export const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState("light"); // You can change the default theme as needed

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
