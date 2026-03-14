import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  ChevronRight, 
  Bot,
  Globe,
  Zap,
  Shield,
  MessageSquare,
  Mail,
  Play,
  Terminal,
  Settings,
  Layout
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../utils";
import { useLanguage } from "../context/LanguageContext";

const TypewriterCode: React.FC = () => {
  const codeLines = [
    "class Genesis {",
    "  constructor() {",
    "    this.vision = 'future';",
    "    this.stack = ['React', 'Node'];",
    "  }",
    "  build() { return '🚀'; }",
    "}"
  ];

  const [displayText, setDisplayText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < codeLines.length) {
      if (charIndex < codeLines[lineIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + codeLines[lineIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + "\n");
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 150);
        return () => clearTimeout(timeout);
      }
    } else {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setLineIndex(0);
        setCharIndex(0);
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [lineIndex, charIndex]);

  return (
    <pre className="text-[11px] text-genesis-accent/80 font-mono text-left w-full px-6 leading-relaxed">
      <code className="block">
        {displayText}
        <span className="animate-pulse border-r-2 border-genesis-accent ml-0.5" />
      </code>
    </pre>
  );
};

const DashboardPreview: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="flex-1 flex flex-col justify-center gap-8 py-6">
      <div className="grid grid-cols-2 gap-4">
        {[
          { label: t("hero_dashboard_performance"), value: "99.9", unit: "ms", color: "text-genesis-accent" },
          { label: t("hero_dashboard_uptime"), value: "100", unit: "%", color: "text-white" },
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05]"
          >
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/30 mb-2 font-bold">{stat.label}</p>
            <div className="flex items-baseline gap-1">
              <span className={cn("text-2xl font-bold tracking-tighter", stat.color)}>{stat.value}</span>
              <span className="text-[10px] text-white/20 font-medium uppercase">{stat.unit}</span>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="relative h-24 w-full bg-white/[0.02] rounded-2xl border border-white/[0.05] overflow-hidden p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-1">
            {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/10" />)}
          </div>
          <div className="text-[8px] uppercase tracking-widest text-white/20 font-bold">{t("hero_dashboard_traffic")}</div>
        </div>
        <svg className="w-full h-12" viewBox="0 0 200 60" preserveAspectRatio="none">
          <motion.path
            d="M 0 50 Q 20 45 40 55 T 80 35 T 120 45 T 160 25 T 200 40"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center pt-32 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 z-10"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase mb-10"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-genesis-accent animate-pulse" />
              {t("hero_badge")}
            </motion.div>
            
            <h1 className="text-6xl md:text-[7.5rem] font-bold leading-[0.9] mb-10 tracking-[-0.04em] text-gradient">
              {t("hero_title_1")} <br />
              <span className="text-white/20">{t("hero_title_2")}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/40 mb-14 max-w-xl leading-relaxed font-medium">
              {t("hero_description")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 items-center">
              <motion.a 
                href="#servicos" 
                className="btn-primary w-full sm:w-auto"
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t("hero_cta_primary")}
              </motion.a>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link to="/portfolio" className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white flex items-center gap-2 transition-colors">
                  {t("hero_cta_secondary")} <ChevronRight size={14} />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative z-10 w-full aspect-[4/5] glass-card rounded-[2.5rem] p-2 overflow-hidden shadow-2xl">
              <div className="w-full h-full rounded-[2.25rem] bg-black/40 p-10 flex flex-col justify-between relative overflow-hidden">
                {/* Decorative mesh */}
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(16,185,129,0.05),transparent_50%)]" />
                
                <div className="flex justify-between items-start relative z-10">
                  <div className="space-y-2">
                    <div className="w-16 h-1 bg-white/20 rounded-full" />
                    <div className="w-10 h-1 bg-white/5 rounded-full" />
                  </div>
                  <div className="w-12 h-12 rounded-2xl border border-white/5 bg-white/5 flex items-center justify-center backdrop-blur-md">
                    <Terminal size={20} className="text-genesis-accent" />
                  </div>
                </div>
                
                <DashboardPreview />
                
                <div className="space-y-6 relative z-10">
                  <div className="h-40 w-full rounded-2xl bg-black/60 border border-white/5 flex items-center justify-center p-4 backdrop-blur-xl shadow-inner">
                     <TypewriterCode />
                  </div>
                  
                  <div className="flex gap-4">
                    <motion.div 
                      className="h-14 flex-1 rounded-2xl bg-white flex items-center justify-center text-black font-bold text-[10px] uppercase tracking-[0.2em] shadow-lg"
                      whileHover={{ scale: 1.02 }}
                    >
                      {t("hero_dashboard_init")}
                    </motion.div>
                    <div className="h-14 w-14 rounded-2xl border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-md">
                      <Settings size={20} className="text-white/40 animate-spin-slow" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background glows */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-genesis-accent/10 blur-[100px] rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-genesis-blue/10 blur-[100px] rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Globe,
      title: t("service_1_title"),
      description: t("service_1_desc"),
      tags: ["Core Web Vitals", "Next.js 14", "Framer Motion"],
      color: "from-emerald-500/20",
      glow: "group-hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.3)]"
    },
    {
      icon: Bot,
      title: t("service_2_title"),
      description: t("service_2_desc"),
      tags: ["Webhooks", "Dashboard", "Real-time"],
      color: "from-blue-500/20",
      glow: "group-hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)]"
    },
    {
      icon: Layout,
      title: t("service_3_title"),
      description: t("service_3_desc"),
      tags: ["UI Design", "UX Strategy", "Prototypes"],
      color: "from-purple-500/20",
      glow: "group-hover:shadow-[0_0_50px_-12px_rgba(139,92,246,0.3)]"
    }
  ];

  return (
    <section id="servicos" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase mb-8"
          >
            {t("services_badge")}
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-[-0.04em] mb-6">
            {t("services_title_1")} <span className="text-white/20 font-medium">{t("services_title_2")}</span>
          </h2>
          <p className="text-white/30 text-lg max-w-2xl mx-auto font-medium">
            {t("services_description")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group relative h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Card Container */}
              <div className={cn(
                "relative z-10 h-full p-10 rounded-[2.5rem] bg-[#050507] border border-white/[0.03] transition-all duration-700",
                "group-hover:border-white/10 group-hover:-translate-y-3",
                service.glow
              )}>
                {/* Background Accent Glow */}
                <div className={cn(
                  "absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-t-[2.5rem]",
                  service.color,
                  "to-transparent"
                )} />
                
                {/* Content */}
                <div className="relative z-20 flex flex-col h-full">
                  {/* Icon Box */}
                  <div className="w-16 h-16 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center justify-center mb-10 transition-all duration-700 group-hover:bg-white group-hover:text-black group-hover:scale-110 shadow-2xl">
                    <service.icon size={28} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-6 tracking-tight text-white group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/40 text-base leading-relaxed mb-10 font-medium group-hover:text-white/60 transition-colors">
                    {service.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="mt-auto flex flex-wrap gap-2">
                    {service.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5 text-white/20 group-hover:text-white/40 group-hover:border-white/10 transition-all">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="contato" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="relative overflow-hidden bg-white/[0.02] border border-white/[0.05] rounded-[3rem] p-12 md:p-24 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative z-10">
            <motion.div 
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase mb-10"
            >
              {t("cta_badge")}
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-[-0.04em] leading-[1.1]">
              {t("cta_title_1")} <br /> 
              <span className="text-white/20 font-medium">{t("cta_title_2")}</span>
            </h2>
            
            <p className="text-base md:text-lg text-white/40 mb-14 max-w-xl mx-auto font-medium leading-relaxed">
              {t("cta_description")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a 
                href="mailto:contato@genesiscompany.com" 
                className="btn-primary w-full sm:w-auto min-w-[240px]"
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t("cta_btn_primary")}
              </motion.a>
              <a 
                href="https://discord.gg/genesis" 
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 hover:text-white transition-colors"
              >
                {t("cta_btn_secondary")}
              </a>
            </div>
          </div>
          
          {/* Subtle background mesh */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </motion.div>
      </div>
    </section>
  );
};

export const Home: React.FC = () => {
  return (
    <div className="relative">
      <Hero />
      <Services />
      <CTA />
    </div>
  );
};
