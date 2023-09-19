import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  //   GoogleAuthProvider,
  //   signInWithPopup,
} from "firebase/auth";
import { auth } from "../components/Firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(firstName, lastName, email, password, confirmPassword) {
    return createUserWithEmailAndPassword(
      auth,
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    );
  }
  function logOut() {
    return signOut(auth);
  }
  //   function googleSignIn() {
  //     const googleAuthProvider = new GoogleAuthProvider();
  //     return signInWithPopup(auth, googleAuthProvider);
  //   }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider value={{ user, logIn, signUp, logOut }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
