import "./styles/main.css";
import Intro from "../src/modules/intro/intro";
import Projects from "../src/modules/projects/projects";
import Contact from "../src/modules/contact/contact";

function App() {
  return (
    <div class="min-h-screen bg-gray-300 py-6 flex flex-col justify-center sm:py-12 bg-fixed">
      <Intro />
      <Projects />
    </div>
  );
}

export default App;
