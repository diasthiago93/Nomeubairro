import React from "react";
import { Header } from "./components/Header";
import AnchorProvider from "./context";
import { Home } from "./pages/home";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <div className="App">
      <AnchorProvider>
        <GlobalStyles />
        <Header />
        <Home />
      </AnchorProvider>
    </div>
  );
}

export default App;
