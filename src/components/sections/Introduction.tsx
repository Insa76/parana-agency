import { motion } from "framer-motion";
import SectionLabel from "../ui/SectionLabel";
import { useLanguage } from "../../context/LanguageContext";

function Introduction() {
  const { language } = useLanguage();
  const es = language === "es";
  return (
    <section id="about" className="relative overflow-hidden bg-[var(--parana-white)] text-[var(--parana-black)]">
      <div className="mx-auto w-full max-w-[1600px] px-5 py-20 md:px-8 md:py-28">
        <div className="flex items-start justify-between"><SectionLabel number="02">{es ? "Lo que nos mueve" : "What drives us"}</SectionLabel><span className="hidden font-mono text-[9px] uppercase tracking-[0.2em] opacity-40 md:block">Chaco / Corrientes</span></div>
        <div className="py-16 md:py-20">
          <motion.h2 initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7 }} className="max-w-[1250px] text-[clamp(3.2rem,8vw,8rem)] font-bold leading-[0.88] tracking-[-0.07em]">{es ? "Los negocios" : "Business"}<br/><span className="opacity-30">{es ? "pueden evolucionar." : "can move forward."}</span></motion.h2>
        </div>
        <div className="grid grid-cols-1 gap-10 border-t border-black/15 pt-7 md:grid-cols-12 md:gap-8">
          <p className="max-w-[390px] text-sm leading-relaxed opacity-65 md:col-span-4 md:text-base">{es ? "Cada empresa tiene desafíos, recursos y oportunidades diferentes. Por eso, las soluciones no deberían venir en serie ni responder a una moda." : "Every business has different challenges, resources and opportunities. Solutions should never be one-size-fits-all or driven by trends."}</p>
          <p className="max-w-[650px] text-xl font-medium leading-[1.2] tracking-[-0.03em] md:col-span-6 md:text-3xl">{es ? "Conectamos visión de negocio, estrategia y tecnología para convertir necesidades concretas en mejoras posibles." : "We connect business vision, strategy and technology to turn real needs into practical improvements."}</p>
          <div className="flex items-end md:col-span-2 md:justify-end"><span className="font-mono text-[9px] uppercase tracking-[0.18em]">{es ? "Primero el problema." : "Problem first."}</span></div>
        </div>
      </div>
    </section>
  );
}
export default Introduction;
