import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
  