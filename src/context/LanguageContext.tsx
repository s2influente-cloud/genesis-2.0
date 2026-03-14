import React, { createContext, useContext, useState, type ReactNode } from "react";

type Language = "pt" | "en";

interface Translations {
  [key: string]: {
    [key in Language]: string | string[];
  };
}

const translations: Translations = {
  // Header
  nav_home: { pt: "Início", en: "Home" },
  nav_services: { pt: "Serviços", en: "Services" },
  nav_portfolio: { pt: "Portfólio", en: "Portfolio" },
  nav_about: { pt: "Sobre", en: "About" },
  nav_contact: { pt: "Contato", en: "Contact" },
  header_contact_btn: { pt: "Contato", en: "Contact" },

  // Hero
  hero_badge: { pt: "Disponível para novos projetos", en: "Available for new projects" },
  hero_title_1: { pt: "Genesis", en: "Genesis" },
  hero_title_2: { pt: "Company.", en: "Company." },
  hero_description: { 
    pt: "Projetamos experiências digitais de alta performance. De sites de alto padrão a automações complexas para seu ecossistema.", 
    en: "We engineer high-performance digital experiences. From high-end websites to complex automation for your ecosystem." 
  },
  hero_cta_primary: { pt: "Começar Exploração", en: "Start Exploring" },
  hero_cta_secondary: { pt: "Nosso portfólio", en: "Our portfolio" },
  hero_dashboard_performance: { pt: "Performance", en: "Performance" },
  hero_dashboard_uptime: { pt: "Disponibilidade", en: "Uptime" },
  hero_dashboard_traffic: { pt: "Tráfego de Rede", en: "Network Traffic" },
  hero_dashboard_init: { pt: "Inicializar", en: "Initialize" },

  // Services
  services_badge: { pt: "Capacidades", en: "Capabilities" },
  services_title_1: { pt: "Expertise que", en: "Expertise that" },
  services_title_2: { pt: "define.", en: "defines." },
  services_description: { 
    pt: "Unindo a engenharia complexa com design de classe mundial.", 
    en: "Bridging the gap between complex engineering and world-class design." 
  },
  service_1_title: { pt: "Engenharia Web", en: "Web Engineering" },
  service_1_desc: { 
    pt: "Interfaces de alta performance construídas com precisão. Especialistas em React, Next.js e SEO técnico.", 
    en: "High-performance interfaces built with precision. We specialize in React, Next.js, and technical SEO." 
  },
  service_2_title: { pt: "Sistemas Discord", en: "Discord Systems" },
  service_2_desc: { 
    pt: "Automação de nível empresarial para comunidades. Bots escaláveis, seguros e totalmente personalizados.", 
    en: "Enterprise-grade automation for communities. Scalable, secure, and fully customized bots." 
  },
  service_3_title: { pt: "Design Visual", en: "Visual Design" },
  service_3_desc: { 
    pt: "Estética minimalista e de alto padrão que converte. Cada pixel tem um propósito.", 
    en: "Minimalist and high-end aesthetics that convert. Every pixel has a purpose." 
  },

  // CTA
  cta_badge: { pt: "Entre em contato", en: "Get in touch" },
  cta_title_1: { pt: "Vamos criar a", en: "Let's craft the" },
  cta_title_2: { pt: "próxima grande coisa.", en: "next big thing." },
  cta_description: { 
    pt: "Estamos aceitando novos projetos. Vamos discutir como podemos ajudar sua empresa a crescer.", 
    en: "We are currently accepting new projects. Let's discuss how we can help your business grow." 
  },
  cta_btn_primary: { pt: "Iniciar uma conversa", en: "Start a conversation" },
  cta_btn_secondary: { pt: "Junte-se ao nosso Discord", en: "Join our Discord" },

  // Portfolio
  portfolio_badge: { pt: "Trabalhos Selecionados", en: "Selected Work" },
  portfolio_title_1: { pt: "Soluções", en: "Crafted" },
  portfolio_title_2: { pt: "Artesanais.", en: "Solutions." },
  portfolio_description: { 
    pt: "Uma seleção curada dos nossos produtos digitais mais desafiadores e impactantes.", 
    en: "A curated selection of our most challenging and impactful digital products." 
  },
  portfolio_archive: { pt: "Arquivo GitHub", en: "GitHub Archive" },

  // About
  about_badge: { pt: "O Visionário", en: "The Visionary" },
  about_title_1: { pt: "Artesão", en: "Digital" },
  about_title_2: { pt: "Digital.", en: "Artisan." },
  about_schedule: { pt: "Agendar uma chamada", en: "Schedule a call" },
  about_role: { pt: "Desenvolvedor Fullstack", en: "Fullstack Developer" },
  about_location: { pt: "Brasil, América do Sul", en: "Brazil, South America" },
  about_bio_1: { 
    pt: "Lukas é um desenvolvedor apaixonado por transformar desafios técnicos complexos em soluções digitais simples e elegantes. Seu trabalho abrange desde interfaces web de alta performance até sistemas inteligentes de automação.", 
    en: "Lukas is a developer with a passion for transforming complex technical challenges into simple, elegant digital solutions. His work spans across high-performance web interfaces and intelligent automation systems." 
  },
  about_bio_2: {
    pt: "Com vasta experiência em setores competitivos de jogos e soluções corporativas, Lukas agora constrói ecossistemas escaláveis e automações de alta performance.",
    en: "With deep experience in competitive gaming sectors and enterprise solutions, Lukas now engineers scalable ecosystems and high-performance automations."
  },
  about_bio_3: {
    pt: "Sua abordagem é clínica e pragmática, utilizando React, Next.js e engenharia técnica para entregar produtos que não apenas funcionam — eles definem novos padrões.",
    en: "His approach is clinical and pragmatic, leveraging React, Next.js, and technical engineering to deliver products that don't just work — they set new benchmarks."
  },
  about_exp_1_point_1: { pt: "Liderança no desenvolvimento de ecossistemas web escaláveis e automações complexas.", en: "Leadership in developing scalable web ecosystems and complex automations." },
  about_exp_1_point_2: { pt: "Integração de APIs de alto desempenho e dashboards personalizados para clientes globais.", en: "Integration of high-performance APIs and custom dashboards for global clients." },
  about_exp_1_point_3: { pt: "Otimização de performance web resultando em carregamentos 40% mais rápidos.", en: "Web performance optimization resulting in 40% faster load times." },
  about_exp_title: { pt: "Experiência Profissional", en: "Work Experience" },
  about_arsenal: { pt: "Arsenal Técnico", en: "Technical Arsenal" },

  // Footer
  footer_desc: { 
    pt: "Projetando o futuro da web e automação para Discord. Precisão, performance e inovação em cada linha de código.", 
    en: "Engineering the future of web and Discord automation. Precision, performance, and innovation in every line of code." 
  },
  footer_nav_title: { pt: "Navegação", en: "Navigation" },
  footer_legal_title: { pt: "Legal", en: "Legal" },
  footer_privacy: { pt: "Privacidade", en: "Privacy" },
  footer_terms: { pt: "Termos", en: "Terms" },
  footer_cookies: { pt: "Cookies", en: "Cookies" },
  footer_rights: { pt: "Todos os direitos reservados.", en: "All rights reserved." },
  footer_crafted: { pt: "Criado por", en: "Crafted by" },

  // Projects
  project_1_title: { pt: "Para Anália — Tributo", en: "For Anália — Tribute" },
  project_1_desc: { pt: "Um site emocionante e interativo criado como homenagem especial, com mensagens, galeria e design romântico.", en: "An emotional and interactive website created as a special tribute, featuring messages, gallery, and romantic design." },
  project_2_title: { pt: "Nexus Bot", en: "Nexus Bot" },
  project_2_desc: { pt: "Sistema de economia e moderação avançada para Discord com dashboard web integrado.", en: "Advanced economy and moderation system for Discord with integrated web dashboard." },
  project_3_title: { pt: "CryptoDash", en: "CryptoDash" },
  project_3_desc: { pt: "Dashboard em tempo real para monitoramento de criptoativos com gráficos interativos.", en: "Real-time dashboard for monitoring crypto assets with interactive charts." },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("pt");

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return (translation[language] as string) || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
