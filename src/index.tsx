import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ParallaxProvider } from "react-scroll-parallax";
import App from "./frontend/App";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, MainTheme } from "./frontend/layout/Theme";
import store from "./frontend/reducers/store";

// Entry Point of your App
// Have Fun By https://github.com/lucaspelloni2 :-)
const MyApp = () => {
  return (
    <Fragment>
      <ThemeProvider theme={MainTheme}>
        <GlobalStyle />
      </ThemeProvider>
      <Provider store={store}>
        <ParallaxProvider>
          <App />
        </ParallaxProvider>
      </Provider>
    </Fragment>
  );
};

ReactDOM.render(<MyApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to regist   er() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
