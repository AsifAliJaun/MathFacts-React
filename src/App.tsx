import React from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import MathFacts from "./Components/MathFacts";
import {
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Container maxWidth="md" style={{ textAlign: "center" }}>
          <MathFacts/>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
