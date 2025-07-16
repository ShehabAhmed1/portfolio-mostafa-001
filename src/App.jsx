import "./App.css";
/** import Components */
import { NavBar } from "./assets/Components/NavBar";
import { Home } from "./assets/Components/Home";
import { About } from "./assets/Components/About";
import { Gallary } from "./assets/Components/Gallary";
import { Contact } from "./assets/Components/Contact";
import { Carousel } from "./assets/Components/Carousel ";
function App() {
  return (
    <main className="Portfolio">
      <NavBar />
      <Home />
      <About />
      <Carousel />
      <Gallary />
      <Contact />
    </main>
  );
}

export default App;
