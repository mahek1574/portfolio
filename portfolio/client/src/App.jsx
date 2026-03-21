import { useState } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-slate-950 text-slate-50 min-h-screen selection:bg-cyan-500/30 overflow-x-hidden">
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Works />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
