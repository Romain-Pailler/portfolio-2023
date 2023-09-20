import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Veille from "./components/Veille";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About/>
      <Portfolio/>
      <Experience/>
      <Veille/>
      <Contact/>
      <SocialLinks/>
    </div>
  );
}

export default App;
