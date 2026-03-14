import React from "react";
import { motion } from "framer-motion";
import { 
  Calendar,
  Linkedin,
  Github,
  Twitter,
  Mail,
  MapPin,
  ChevronRight,
  Globe
} from "lucide-react";
import { cn } from "../utils";
import { useLanguage } from "../context/LanguageContext";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "X", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:contato@genesiscompany.com" },
];

export const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  const experience = [
    {
      company: "Genesis Studio",
      period: "2025 — Present",
      role: t("about_role"),
      points: [
        t("about_exp_1_point_1"),
        t("about_exp_1_point_2"),
        t("about_exp_1_point_3")
      ]
    }
  ];

  return (
    <section className="py-40 px-6 relative min-h-screen overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Lado Esquerdo - Perfil */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex flex-col items-center text-center lg:items-start lg:text-left space-y-8"
          >
            <div className="relative group">
              <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-white/5 p-1 bg-gradient-to-br from-white/10 to-transparent">
                <img 
                  src="/0a38f645-851c-45fc-b933-e3f46abdc595.jpg" 
                  alt="Lukas"
                  className="w-full h-full object-cover rounded-full transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -inset-4 bg-genesis-accent/5 blur-[40px] rounded-full -z-10 group-hover:bg-genesis-accent/10 transition-all" />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-white/40">
                <MapPin size={16} className="text-genesis-accent" />
                <span className="text-sm font-medium tracking-wide">{t("about_location")}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/5 text-[10px] font-bold uppercase tracking-widest text-white/40">Português (BR)</span>
              </div>
            </div>
          </motion.div>

          {/* Lado Direito - Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-8 space-y-12"
          >
            <div className="space-y-6">
              <motion.button 
                className="group flex items-center gap-3 px-4 py-2 rounded-full bg-genesis-accent/10 border border-genesis-accent/20 text-genesis-accent hover:bg-genesis-accent/20 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-8 h-8 rounded-full bg-genesis-accent/20 flex items-center justify-center">
                  <Calendar size={14} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest">{t("about_schedule")}</span>
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <div className="space-y-2">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">Lukas K.</h1>
                <p className="text-xl md:text-2xl text-white/40 font-medium tracking-tight">{t("about_role")}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-white/40 hover:text-white hover:border-white/10 transition-all"
                    whileHover={{ y: -2 }}
                  >
                    <link.icon size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="space-y-8 text-white/40 text-xl leading-relaxed font-medium max-w-3xl">
              <p>
                {t("about_bio_1")}
              </p>
            </div>

            <div className="space-y-12 pt-12 border-t border-white/5">
              <h2 className="text-4xl font-bold tracking-tight text-white">{t("about_exp_title")}</h2>
              
              <div className="space-y-12">
                {experience.map((job, i) => (
                  <div key={i} className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <h3 className="text-2xl font-bold text-white">{job.company}</h3>
                      <span className="text-sm font-bold uppercase tracking-[0.2em] text-white/20">{job.period}</span>
                    </div>
                    <p className="text-genesis-accent font-bold uppercase tracking-widest text-xs">{job.role}</p>
                    <ul className="space-y-3">
                      {job.points.map((point, j) => (
                        <li key={j} className="flex items-start gap-3 text-white/40 text-lg leading-relaxed">
                          <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-white/10 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
