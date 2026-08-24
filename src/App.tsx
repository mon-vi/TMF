import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/lib/motion/LenisProvider";
import ScrollToTop from "@/lib/motion/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import Home from "@/pages/Home";
import Donate from "@/pages/Donate";
import DonateThankYou from "@/pages/DonateThankYou";
import About from "@/pages/About";
import ProgramsPage from "@/pages/ProgramsPage";
import EventsPage from "@/pages/EventsPage";
import Contact from "@/pages/Contact";
import GetInvolved from "@/pages/GetInvolved";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <LenisProvider>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] rounded bg-accent px-4 py-2 text-small font-semibold text-white"
        >
          Skip to content
        </a>
        <ScrollToTop />
        <ScrollProgress />
        <Navbar />
        <div id="main-content" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/donate/thank-you" element={<DonateThankYou />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </LenisProvider>
    </BrowserRouter>
  );
}
