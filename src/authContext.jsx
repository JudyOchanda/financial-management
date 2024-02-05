import React, { createContext, useContext, useState, useEffect } from "react";
import { user } from "./data/dataStructure";

// Create a context
const UserContext = createContext();

// Custom hook to access the context
export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);

  // Fetch user and related data on component mount
  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setCurrentUser(user);
        setIsSignedIn(true);
      }, 10);
    };

    fetchData();
  }, []);

  // Define the context value
  const contextValue = {
    user: currentUser,
    isSignedIn,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {currentUser ? children : <div>Loading...</div>}
    </UserContext.Provider>
  );
};
