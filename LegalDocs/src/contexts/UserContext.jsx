import React, { createContext, useState, useEffect } from "react";

// 1. Define the shape of your context
const defaultUserState = {
  isAuthenticated: false,
  userData: null,
  setUser: () => {},
};

// 2. Create the context
export const UserContext = createContext(defaultUserState);

// 3. Context Provider component
export function UserProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);

  // setUser allows updating both auth status and user data
  const setUser = ({ isAuthenticated, userData }) => {
    setIsAuthenticated(isAuthenticated);
    setUserData(userData);
  };

  // Example: On mount, check localStorage for an auth token
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      // TODO: verify token / fetch user data from API
      setUser({
        isAuthenticated: true,
        userData: { name: "Alice Example", email: "alice@example.com" },
      });
    }
  }, []);

  return (
    <UserContext.Provider value={{ isAuthenticated, userData, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
