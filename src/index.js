import React from "react";
import ReactDOM from "react-dom/client";
import { Global, ThemeProvider } from "@emotion/react";
import "modern-normalize";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { App } from "components";
import { GlobalStyles, theme } from "styles";
import {persistor, store} from 'redux/store'

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>
);
