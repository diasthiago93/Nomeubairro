import React from "react";
import { Header } from "./components/Header";
import { Home } from "./pages/home";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Home />
    </div>
  );
}

export default App;
