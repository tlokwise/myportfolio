import "./App.css";
import Navbar from "./components/Navbar/Navbar";
//Page components
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
//React components

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
      <Resume />
    </>
  );
}

export default App;
