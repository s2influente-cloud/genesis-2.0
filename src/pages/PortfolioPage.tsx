import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const PortfolioPage: React.FC = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t("project_1_title"),
      description: t("project_1_desc"),
      link: "https://s2analia.vercel.app/",
      tags: ["Frontend", "React", "Animations"],
      category: "Web Design"
    },
    {
      title: t("project_2_title"),
      description: t("project_2_desc"),
      link: "#",
      tags: ["Discord.js", "Node.js", "MongoDB"],
      category: "Discord Bot"
    },
    {
      title: t("project_3_title"),
      description: t("project_3_desc"),
      link: "#",
      tags: ["React", "API Rest", "Tailwind"],
      category: "Web App"
    }
  ];

  return (
    <section id="portfolio" className="py-40 px-6 relative overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-32">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase mb-10"
            >
              {t("portfolio_badge")}
            </motion.div>
            <motion.h2 
              className="text-6xl md:text-[8rem] font-bold mb-10 tracking-[-0.04em] leading-[0.9] text-gradient"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {t("portfolio_title_1")} <br /> <span className="text-white/20">{t("portfolio_title_2")}</span>
            </motion.h2>
            <p className="text-white/40 text-xl leading-relaxed font-medium max-w-xl">
              {t("portfolio_description")}
            </p>
          </div>
          <motion.a 
            href="https://github.com/" 
            target="_blank"
            className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white flex items-center gap-2 transition-colors pb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {t("portfolio_archive")} <ChevronRight size={14} />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="aspect-[16/10] rounded-[2.5rem] glass-card overflow-hidden mb-10 relative group-hover:-translate-y-2 transition-all duration-700 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                
                {/* Project Placeholder/Preview */}
                <div className="w-full h-full bg-zinc-950 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100">
                   <div className="relative">
                     <ExternalLink size={60} className="text-white/[0.03] group-hover:text-genesis-accent/20 transition-colors duration-700" strokeWidth={1} />
                     <motion.div 
                       className="absolute inset-0 bg-genesis-accent/20 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                     />
                   </div>
                </div>

                <div className="absolute top-8 left-8 z-20">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-xl bg-white text-black shadow-xl">
                    {project.category}
                  </span>
                </div>
                
                <div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <div className="max-w-[70%]">
                    <h3 className="text-3xl font-bold tracking-tight text-white mb-2">{project.title}</h3>
                    <p className="text-white/60 text-sm font-medium line-clamp-1">{project.description}</p>
                  </div>
                  <motion.a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-2xl bg-white text-black flex items-center justify-center shadow-2xl"
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight size={24} />
                  </motion.a>
                </div>
              </div>

              <div className="px-4 flex flex-wrap gap-3">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 border border-white/5 px-4 py-2 rounded-xl bg-white/[0.02]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
