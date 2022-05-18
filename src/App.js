import { Routes, Route, BrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import Identification from "./pages/Identification";
import Layout from "./layout/Layout";
import Covid from "./pages/Covid";
import Injection from "./pages/Injection";
import Advice from "./pages/Advice";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
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
