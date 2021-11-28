import React from "react";
import "./App.css";
import Body from "./Components/Body";
import GlobalProvider from "./context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <Body />
    </GlobalProvider>
  );
};

export default App;
