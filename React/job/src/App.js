import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route exact path="/" Component={<Home />} />
          <Route exact path="/about" Component={<About />} />
          <Route exact path="/dashboard" Component={<Dashboard />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
