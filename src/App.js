import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HouseGuest from "./components/HouseGuest";
import Terms from "./components/Terms";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HouseGuest />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
