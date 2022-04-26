import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Identification from "./pages/Identification";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/identification" element={<Identification />} />
      </Routes>
    </div>
  );
}

export default App;
