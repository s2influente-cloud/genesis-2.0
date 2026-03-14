import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { 
  Menu, 
  X,
  Languages
} from "lucide-react";
import { cn } from "../utils";
import { useLanguage } from "../context/LanguageContext";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();
  const { t, language, setLanguage } = useLanguage();

  const navItems = [
    { href: "/", label: t("nav_home"), type: "route", key: "nav_home" },
    { href: "/#servicos", label: t("nav_services"), type: "hash", key: "nav_services" },
    { href: "/portfolio", label: t("nav_portfolio"), type: "route", key: "nav_portfolio" },
    { href: "/sobre", label: t("nav_about"), type: "route", key: "nav_about" },
    { href: "/#contato", label: t("nav_contact"), type: "hash", key: "nav_contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
      scrolled ? "py-4" : "py-10"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex justify-center">
        <nav className={cn(
          "flex items-center gap-8 px-8 py-3 rounded-2xl transition-all duration-700 relative",
          scrolled 
            ? "bg-black/40 backdrop-blur-2xl border border-white/5 shadow-2xl" 
            : "bg-white/[0.03] backdrop-blur-md border border-white/5"
        )}>
          <Link to="/" className="flex items-center gap-3 group pr-4 border-r border-white/10">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center group-hover:bg-genesis-accent transition-all duration-500 overflow-hidden">
              <img src="/logo.png" alt="Genesis" className="w-5 h-5 object-contain invert" />
            </div>
            <span className="font-bold text-base tracking-tighter">GENESIS</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2 relative">
            {navItems.map((item) => {
               const isActive = location.pathname === item.href || (item.type === "hash" && location.hash === item.href.split("#")[1]);
               return (
                 <div 
                   key={item.key} 
                   className="relative px-4 py-2"
                   onMouseEnter={() => setHoveredItem(item.key)}
                   onMouseLeave={() => setHoveredItem(null)}
                 >
                   {item.type === "route" ? (
                     <Link
                       to={item.href}
                       className={cn(
                         "text-xs font-bold uppercase tracking-widest transition-all duration-300 relative z-10",
                         isActive ? "text-white" : "text-white/40 hover:text-white"
                       )}
                     >
                       {item.label}
                     </Link>
                   ) : (
                     <a
                       href={item.href}
                       className={cn(
                         "text-xs font-bold uppercase tracking-widest transition-all duration-300 relative z-10",
                         isActive ? "text-white" : "text-white/40 hover:text-white"
                       )}
                     >
                       {item.label}
                     </a>
                   )}
                   
                   {hoveredItem === item.key && (
                     <motion.div
                       layoutId="nav-pill"
                       className="absolute inset-0 bg-white/[0.05] rounded-xl -z-0"
                       transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                     />
                   )}
                   
                   {isActive && (
                     <motion.div 
                       layoutId="nav-active"
                       className="absolute -bottom-0.5 left-4 right-4 h-[2px] bg-genesis-accent rounded-full"
                     />
                   )}
                 </div>
               );
            })}
          </div>

          <div className="flex items-center gap-6 pl-4 border-l border-white/10">
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.05] border border-white/5 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all"
            >
              <Languages size={14} />
              <span>{language === "pt" ? "PT-BR" : "EN"}</span>
            </button>

            <motion.a
              href="mailto:contato@genesiscompany.com"
              className="hidden md:block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors"
              whileHover={{ y: -1 }}
            >
              {t("header_contact_btn")}
            </motion.a>
            
            {/* Mobile Toggle */}
            <button 
              className="md:hidden p-2 text-white/40 hover:text-white transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-6 right-6 mt-4 bg-black/90 backdrop-blur-2xl border border-white/5 rounded-3xl overflow-hidden shadow-soft"
          >
            <div className="flex flex-col p-8 gap-6 text-center">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  className="text-lg font-bold text-white/40 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setLanguage(language === "pt" ? "en" : "pt");
                  setIsOpen(false);
                }}
                className="text-lg font-bold text-genesis-accent"
              >
                {language === "pt" ? "Mudar para Inglês" : "Switch to Portuguese"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
