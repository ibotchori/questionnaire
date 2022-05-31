import { Routes, Route, BrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Identification from "./pages/Identification/Identification";
import Layout from "./layout/Layout";
import Covid from "./pages/Covid/Covid";
import Injection from "./pages/Injection/Injection";
import Advice from "./pages/Advice/Advice";
import Thanks from "./pages/Thanks/Thanks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route element={<Layout />}>
          <Route path="/identification" element={<Identification />} />
          <Route path="/covid" element={<Covid />} />
          <Route path="/injection" element={<Injection />} />
          <Route path="/advice" element={<Advice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
