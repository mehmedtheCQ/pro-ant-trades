import React, { useEffect, useState, useContext, createContext } from "react";
import { auth } from "./firebase"; // Correct import for your Firebase auth instance
import { onAuthStateChanged } from "firebase/auth"; // Import onAuthStateChanged

// Re-define AuthContext here, or import it if you prefer to keep it in UserData.jsx
// For clarity, it's often defined where the Provider is.
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true); // State to manage loading of auth status

  useEffect(() => {
    // This listener will be called whenever the user's sign-in state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false); // Auth state has been determined
    });

    // Cleanup the subscription when the component unmounts
    return unsubscribe;
  }, []);

  // While loading, you might want to render a loading spinner or nothing
  if (loading) {
    return <div>Loading authentication...</div>; // Or a proper loading component
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// You can still export useAuth from here if you want, or keep it in UserData.jsx
export const useAuth = () => useContext(AuthContext);
