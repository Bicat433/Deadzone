import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Concept from "./pages/Concept.jsx";
import Experience from "./pages/Experience.jsx";
import Tradein from "./pages/Tradein.jsx";
import Access from "./pages/Access.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/concept" element={<Concept />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/trade-in" element={<Tradein />} />
        <Route path="/access" element={<Access />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
