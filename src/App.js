import React from "react";
import { Provider } from "react-redux";
import { Router } from "./components/Router/router";
import { store } from "./store";

export const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};