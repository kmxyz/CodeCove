import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Main from "./pages/main/main";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <Navbar />
        <div className="flex-grow">
          <Main />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
