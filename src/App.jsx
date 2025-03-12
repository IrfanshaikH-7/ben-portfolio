// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/core/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./components/screens/contact/Contact";
import Dashboard from "./todelete/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard/*" element={<Dashboard />} /> {/* Added /* */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
