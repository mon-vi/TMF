import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Donate from "@/pages/Donate";
import DonateThankYou from "@/pages/DonateThankYou";
import About from "@/pages/About";
import ProgramsPage from "@/pages/ProgramsPage";
import EventsPage from "@/pages/EventsPage";
import Contact from "@/pages/Contact";
import GetInvolved from "@/pages/GetInvolved";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-involved" element={<GetInvolved />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}