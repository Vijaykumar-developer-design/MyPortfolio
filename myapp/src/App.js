import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Home";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route exact path="/about" Component={About} />
          <Route exact path="/projects" Component={Projects} />
          <Route exact path="/contact" Component={Contact} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
