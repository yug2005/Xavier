import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./components/start/Start"
import NavDropDown from './components/NavDropDown'
import Main from './components/main/Main'
import Tutorial from './components/tutorial/Tutorial'
import MultipleChoice from "./components/main/MultipleChoice"
import WouldYouRather from "./components/main/WouldYouRather";


function App() {
  return (
    <Router>
      <div className="App">
        <NavDropDown />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/keyboard" element={<Main />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/multiplechoice" element={<MultipleChoice />} />
          <Route path="/wouldyourather" element={<WouldYouRather />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
