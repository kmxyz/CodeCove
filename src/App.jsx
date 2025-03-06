import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Main from "./pages/main/main";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
