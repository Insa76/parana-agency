import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

function Hero() {
  const { language } = useLanguage();
  const es = language === "es";
  return (
    <section id="top" className="relative flex min-h-screen overflow-hidden bg-[var(--parana-black)] text-[var(--parana-white)]">
      <div className="absolute inset-0">
        <motion.img src="/images/hero/hero.jpg" alt="" initial={{ scale: 1.06, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.4, ease: "easeOut" }} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/25" />
        <div className="absolute right-[-10%] top-[5%] h-[55vw] w-[55vw] rounded-full bg-[var(--parana-accent)] opacity-[0.045] blur-[140px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[1] opacity-20" style={{ backgroundImage: "linear-gradient(to right, var(--parana-line) 1px, transparent 1px), linear-gradient(to bottom, var(--parana-line) 1px, transparent 1px)", backgroundSize: "clamp(60px, 8vw, 140px) clamp(60px, 8vw, 140px)" }} />
      <div className="relative z-10 mx-auto flex w-full max-w-[1800px] flex-col justify-between px-5 pb-8 pt-32 md:px-8 md:pb-10 lg:px-10 lg:pt-36">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/65">Chaco / Corrientes / Argentina</span>
          <span className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-white/65 sm:block">{es ? "Estrategia · Tecnología · Innovación" : "Strategy · Technology · Innovation"}</span>
        </div>
        <div className="mt-auto max-w-[1120px] pb-[7vh] pt-[16vh]">
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="mb-7 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--parana-accent)]">{es ? "Soluciones para empresas y comercios" : "Solutions for businesses"}</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease: "easeOut" }} className="font-display text-[clamp(3.7rem,10.5vw,10.5rem)] font-bold leading-[0.83] tracking-[-0.07em]">
            <span className="block">{es ? "Impulsamos" : "Moving"}</span>
            <span className="block">{es ? "la evolución" : "businesses"}</span>
            <span className="block text-[var(--parana-accent)]">{es ? "de tu negocio." : "forward."}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .25 }} className="mt-9 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
            {es ? "Estrategia, tecnología e innovación para mejorar cómo funcionan las empresas, cómo se relacionan con sus clientes y cómo encuentran nuevas oportunidades." : "Strategy, technology and innovation to improve how businesses operate, connect with customers and discover new opportunities."}
          </motion.p>
          <a href="#about" className="mt-9 inline-flex items-center gap-4 border-b border-white/30 pb-3 font-mono text-[9px] uppercase tracking-[0.18em] transition-colors hover:border-[var(--parana-accent)] hover:text-[var(--parana-accent)]">{es ? "Conocé qué podemos impulsar" : "See what we can improve"}<span>↘</span></a>
        </div>
        <div className="flex items-end justify-between"><div className="flex items-center gap-3"><span className="h-8 w-px bg-[var(--parana-accent)]" /><span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/60">{es ? "Desplazar" : "Scroll"}</span></div><span className="font-mono text-[8px] tracking-[0.2em] text-white/60">01</span></div>
      </div>
    </section>
  );
}
export default Hero;
