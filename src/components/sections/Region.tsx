import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

function Region() {
  const { language } = useLanguage();
  const es = language === "es";
  return (
    <section id="region" className="relative overflow-hidden bg-[#111] text-[var(--parana-white)]">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-8 md:py-32">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-12 lg:grid-cols-[.35fr_1fr]"><span className="font-mono text-[9px] uppercase tracking-[.18em] text-[var(--parana-gray)]">08 / {es ? "Nuestra región" : "Our region"}</span><div><h2 className="font-display text-[clamp(3.5rem,8vw,8rem)] font-bold leading-[.85] tracking-[-.07em]">{es ? "Desde el Nordeste." : "From the Northeast."}<span className="block text-[var(--parana-accent)]">{es ? "Con mirada regional." : "With a regional outlook."}</span></h2><div className="mt-12 grid gap-8 border-t border-white/15 pt-7 md:grid-cols-[1fr_auto]"><p className="max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">{es ? "Con base en Chaco y Corrientes, conocemos de cerca la realidad de los comercios y las empresas de la región. Trabajamos desde esa cercanía, con una mirada abierta a nuevas oportunidades." : "Based in Chaco and Corrientes, we understand the realities of businesses across the region. We work from that proximity, with an open view of new opportunities."}</p><span className="self-end font-mono text-[9px] uppercase tracking-[.18em] text-white/50">Chaco / Corrientes / Argentina</span></div></div></motion.div>
      </div>
    </section>
  );
}
export default Region;
