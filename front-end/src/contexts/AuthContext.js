import React, { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Optional: load initial login state from local storage or a cookie
  useEffect(() => {
    localStorage.removeItem("isLoggedIn");  // Clear session info upon app restart
    setIsLoggedIn(false); // Force logged-out state on reload
  }, []);

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  // Memoize the value to prevent unnecessary re-renders
  const value = useMemo(() => ({ isLoggedIn, login, logout }), [isLoggedIn]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Add PropTypes validation for children
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};