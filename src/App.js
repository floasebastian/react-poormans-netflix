import React from "react";
import Container from "./Components/Container";
import { ThemeWrapper } from "./Components/Wrapper";

tailwind.config = {
  darkMode: "class",
  content: ["./src/**/*.js", "./public/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};

const App = () => {
  return (
    <ThemeWrapper>
      <Container />
    </ThemeWrapper>
  );
};

export default App;
