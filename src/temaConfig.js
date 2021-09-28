/* import { createTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import lightBlue from "@material-ui/core/colors/lightBlue"; */

import { createTheme } from "@mui/material/styles";
import purple from "@mui/material/colors/purple";
import lightBlue from "@mui/material/colors/lightBlue";

const theme = createTheme({
  palette: {
    primary: {
      main: "#111111",
    },
    secondary: {
      main: purple[500],
    },
    negro: {
      main: lightBlue[500],
    },
  },
});

export default theme;
