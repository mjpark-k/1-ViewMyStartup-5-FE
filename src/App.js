import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import CompareCompany from "./pages/CompareCompany/CompareCompany";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/myCompany" element={<CompareCompany />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
