import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Test from "./pages/test.js";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Test />
    </BrowserRouter>
  );
}

export default App;
