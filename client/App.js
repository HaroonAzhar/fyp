import React from "react";
import MainRouter from "./MainRouter";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import { hot } from "react-hot-loader";
import "./styles/bootstrap/css/bootstrap.min.css";

import "./styles/lightbox2/css/lightbox.min.css";

import "./styles/nouislider/nouislider.min.css";

import "./styles/bootstrap-select/css/bootstrap-select.min.css";

import "./styles/owl.carousel2/assets/owl.carousel.min.css";
import "./styles/owl.carousel2/assets/owl.theme.default.css";
import "./styles/css/style.default.css";
const App = () => {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MainRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default hot(module)(App);
