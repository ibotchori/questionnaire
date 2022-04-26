import { Routes, Route, BrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import Identification from "./pages/Identification";
import Layout from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<Layout />}>
          <Route path="/identification" element={<Identification />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
