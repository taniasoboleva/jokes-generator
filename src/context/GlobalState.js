import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  jokesList: [],
};

export const GlobalContext = createContext(initialState);

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ jokesList: state.jokesList }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
