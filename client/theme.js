import { createMuiTheme } from "@material-ui/core/styles";
import { blueGrey, lightGreen } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#fff263",
      main: "#fbc02d",
      dark: "#c49000",
      contrastText: "#fafafa",
    },
    secondary: {
      light: "#ff8a50",
      main: "#ff5722",
      dark: "#c41c00",
      contrastText: "#fafafa",
    },
    openTitle: blueGrey["400"],
    protectedTitle: lightGreen["400"],
    type: "light",
  },
});

export default theme;
