import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-orange-50 text-gray-800">
      {/* Navbar */}
      <nav className="relative bg-orange-500 text-white px-6 py-4 overflow-hidden">
        {/* Speed line */}
        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-white/70 to-transparent animate-speed" />

        <div className="flex items-center justify-between relative z-10">
          <Link to="/" className="text-xl font-bold tracking-wide">
            MyWeb
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex gap-8">
            <li className="relative group">
              <Link to="/">หน้าแรก</Link>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </li>

            <li className="relative group">
              <Link to="/about">วิธีติดตั้ง</Link>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </li>

            <li className="relative group">
              <Link to="/contact">Workshop</Link>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </li>
          </ul>

          {/* Mobile button */}
          <button
            className="md:hidden text-2xl transition-transform duration-300 hover:rotate-90"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <ul className="md:hidden mt-4 space-y-3 bg-orange-400/90 p-4 rounded-lg">
            <li>
              <Link to="/" onClick={() => setOpen(false)}>หน้าแรก</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setOpen(false)}>วิธีติดตั้ง</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setOpen(false)}>Workshop</Link>
            </li>
          </ul>
        )}
      </nav>

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Responsive indicator */}
      <div className="fixed bottom-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm shadow-lg">
        <span className="block md:hidden">📱 Mobile</span>
        <span className="hidden md:block lg:hidden">📱 Tablet</span>
        <span className="hidden lg:block">🖥 Desktop</span>
      </div>
    </div>
  );
}