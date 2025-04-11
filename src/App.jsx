import { useState } from "react";
import "./App.css";
/** import Components */
import { NavBar } from "./assets/Components/NavBar";
import { Home } from "./assets/Components/Home";
import { About } from "./assets/Components/About";
import { Gallary } from "./assets/Components/Gallary";
import { Contact } from "./assets/Components/Contact";
function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="Portfolio">
      <NavBar />
      <Home />
      <About />
      <Gallary />
      <Contact />
    </main>
  );
}

export default App;
