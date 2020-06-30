import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";

const initialState = {
  action: "",
  name: "",
  position: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MENU":
      return { action: "openMenu" };
    case "CLOSE_MENU":
      return { action: "closeMenu" };
    case "UPDATE_NAME":
      return { name: action.name };
    case "UPDATE_POSITION":
      return { position: action.postion };
    default:
      return state;
  }
};

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <HomeScreen />
  </Provider>
);

export default App;
