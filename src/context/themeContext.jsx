import { createContext, useState, useContext } from 'react';

import PropTypes from 'prop-types';

export const ThemeContext = createContext({});

const ThemeContextProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);
  const toggleTheme = () => {
    document.body.classList.toggle('light-theme');
    setDarkTheme((prev) => !prev);
  };
  return (
    <ThemeContext.Provider value={{ toggleTheme, darkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => useContext(ThemeContext);
ThemeContextProvider.propTypes = {
  children: PropTypes.node,
};

export { ThemeContextProvider, useThemeContext };
