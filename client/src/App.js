import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
