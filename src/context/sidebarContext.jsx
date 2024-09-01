import { createContext, useState } from 'react';

import PropTypes from 'prop-types';

export const SidebarContext = createContext({});
export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar((prev) => !prev);
  };
  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

SidebarProvider.propTypes = {
  children: PropTypes.node,
};
