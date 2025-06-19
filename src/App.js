import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import LinkBar from "./components/linkbar";
import Resume from "./pages/resume";


function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <LinkBar />
      <section id="home" className="h-screen snap-start">
        <Navbar />
        <Home />
      </section>

      <section id="about" className="min-h-screen snap-start">
        <About />
      </section>

      <section id="projects" className="min-h-screen snap-start">
        <Projects />
      </section>

      <section id="resume" className="min-h-screen snap-start">
        <Resume />
      </section>
    
    </div>
  );
}

export default App;
