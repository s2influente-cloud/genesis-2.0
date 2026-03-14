import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Github, 
  Twitter, 
  ExternalLink
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-24 px-6 border-t border-white/[0.03] relative z-10 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8 group">
              <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center group-hover:bg-genesis-accent transition-all duration-500 overflow-hidden">
                <img src="/logo.png" alt="Genesis" className="w-5 h-5 object-contain invert" />
              </div>
              <span className="font-bold text-xl tracking-tighter">GENESIS</span>
            </div>
            <p className="text-white/30 max-w-sm mb-10 leading-relaxed font-medium">
              {t("footer_desc")}
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, ExternalLink].map((Icon, i) => (
                <motion.a 
                  key={i}
                  href="#" 
                  className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.05] transition-all duration-500"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 mb-10">{t("footer_nav_title")}</h4>
            <ul className="space-y-5 text-white/40 text-xs font-bold uppercase tracking-widest">
              <li><Link to="/" className="hover:text-white transition-colors">{t("nav_home")}</Link></li>
              <li><a href="/#servicos" className="hover:text-white transition-colors">{t("nav_services")}</a></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">{t("nav_portfolio")}</Link></li>
              <li><Link to="/sobre" className="hover:text-white transition-colors">{t("nav_about")}</Link></li>
              <li><a href="/#contato" className="hover:text-white transition-colors">{t("nav_contact")}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 mb-10">{t("footer_legal_title")}</h4>
            <ul className="space-y-5 text-white/40 text-xs font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-white transition-colors">{t("footer_privacy")}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t("footer_terms")}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t("footer_cookies")}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-[10px] font-bold uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Genesis Company. {t("footer_rights")}</p>
          <p className="flex items-center gap-2">
            {t("footer_crafted")} <span className="text-white">Genesis Studio</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
