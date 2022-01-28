import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./components/start/Start"
import Main from './components/main/Main'
import NavDropDown from './components/NavDropDown'


function App() {
  return (
    <Router>
      <div className="App">
        <NavDropDown />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/keyboard" element={<Main />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
