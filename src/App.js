import * as React from "react";

import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

import { ThemeProvider } from "@mui/material/styles";

import EventCalendar from "./EventCalendar";
import theme from "./theme.js";

function App() {
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <ThemeProvider theme={theme}>
            <EventCalendar />
          </ThemeProvider>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default App;
