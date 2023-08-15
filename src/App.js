import './App.css';
import NavBar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Events from './components/Events';
import CoreTeam from './components/CoreTeam';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Router>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/coreteam" element={<CoreTeam />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/"/>} />

        </Routes>
        
        </Router>
    </>
  );
}

export default App;
