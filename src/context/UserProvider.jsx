import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "@firebase/auth";
import { createContext, useEffect, useState } from "react";

import { auth } from "../firebase";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        const { email, displayName, uid } = user;
        setUser({ email, displayName, uid });
      } else {
        setUser(null);
      }
    });
    return () => unsuscribe();
  }, []);

  const loginUser = async (email, password, rememberUser) => {
    await signInWithEmailAndPassword(auth, email, password);
    if (rememberUser) {
      localStorage.setItem("user", JSON.stringify({ email, password }));
    }
  };

  const signOutUser = () => signOut(auth);

  const forgotPassword = async (email) => {
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset email sent");
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, loginUser, signOutUser, forgotPassword }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
