import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import MyCompany from "./pages/MyCompany/MyCompany";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/myCompany" element={<MyCompany />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;