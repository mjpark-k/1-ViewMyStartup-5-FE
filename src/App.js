import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import CompanyDetail from "./pages/CompanyDetailPage/CompanyDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <CompanyDetail />
    </BrowserRouter>
  );
}

export default App;
