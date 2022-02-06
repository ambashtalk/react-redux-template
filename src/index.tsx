import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Counter from "./components/counter";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ThunkComponent from "./components/thunkComponent";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThunkComponent />
      <Counter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

