import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  Identification,
  Covid,
  Injection,
  Advice,
  Thanks,
  Landing,
  ErrorPage,
} from "./pages";
import Layout from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/error" element={<ErrorPage />} />
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
