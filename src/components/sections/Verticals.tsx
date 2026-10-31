import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

function Verticals() {
  const { language } = useLanguage();
  const es = language === "es";
  const sectors = es ? ["Comercios", "Gastronomía", "Empresas de servicios", "Hotelería y turismo", "Eventos y entretenimiento", "Pequeñas y medianas empresas"] : ["Retail businesses", "Food service", "Service companies", "Hospitality and tourism", "Events and entertainment", "Small and medium businesses"];
  return (
    <section id="sectors" className="relative overflow-hidden bg-[var(--parana-white)] text-[var(--parana-black)]">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-8 md:py-32">
        <span className="font-mono text-[9px] uppercase tracking-[.18em] opacity-45">06 / {es ? "Con quién trabajamos" : "Who we work with"}</span>
        <div className="mt-12 grid gap-10 lg:grid-cols-[.35fr_1fr]"><div><p className="max-w-xs text-sm leading-relaxed opacity-55">{es ? "Trabajamos con organizaciones que quieren resolver desafíos concretos y aprovechar mejor sus oportunidades." : "We work with organizations looking to solve concrete challenges and make better use of their opportunities."}</p></div><div><h2 className="max-w-5xl font-display text-[clamp(3rem,7vw,7rem)] font-bold leading-[.88] tracking-[-.065em]">{es ? "Negocios distintos." : "Different businesses."}<span className="block opacity-30">{es ? "Desafíos compartidos." : "Shared challenges."}</span></h2></div></div>
        <div className="mt-20 border-t border-black/15">{sectors.map((sector, i) => <motion.div key={sector} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .04 }} className="grid grid-cols-[48px_1fr] items-center border-b border-black/15 py-7 md:grid-cols-[100px_1fr]"><span className="font-mono text-[9px] opacity-40">0{i + 1}</span><h3 className="font-display text-[clamp(1.8rem,4vw,4rem)] font-semibold leading-none tracking-[-.05em]">{sector}</h3></motion.div>)}</div>
      </div>
    </section>
  );
}
export default Verticals;
