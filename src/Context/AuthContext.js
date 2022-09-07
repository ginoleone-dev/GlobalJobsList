import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

const auth = getAuth();

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
    console.log(state.currentUser);
  }, [state.currentUser]);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (data) => {
  //     console.log(data);
  //   });
  // }, [state.currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
