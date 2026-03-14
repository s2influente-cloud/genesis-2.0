import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { PortfolioPage } from "./pages/PortfolioPage";
import { AboutPage } from "./pages/AboutPage";
import { LanguageProvider } from "./context/LanguageContext";

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-genesis-bg text-white selection:bg-genesis-accent selection:text-black">
          {/* Background Decor */}
          <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-genesis-accent/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-genesis-purple/10 blur-[120px] rounded-full" />
            <div className="absolute top-[30%] right-[5%] w-[30%] h-[30%] bg-genesis-blue/10 blur-[120px] rounded-full" />
          </div>

          <div className="relative z-10 genesis-grid-bg">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/sobre" element={<AboutPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
