import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

function Solutions() {
  const { language } = useLanguage();
  const es = language === "es";
  const tools = es ? ["Estrategia de negocio", "Herramientas digitales", "Inteligencia artificial", "Automatización", "Integración de sistemas", "Diseño de experiencias", "Desarrollo específico"] : ["Business strategy", "Digital tools", "Artificial intelligence", "Automation", "System integration", "Experience design", "Custom development"];
  return (
    <section id="solutions" className="relative overflow-hidden bg-[var(--parana-white)] text-[var(--parana-black)]">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-10 md:grid-cols-[.4fr_1fr]">
          <span className="font-mono text-[9px] uppercase tracking-[.18em] opacity-45">04 / {es ? "Cómo podemos ayudarte" : "How we can help"}</span>
          <div><motion.h2 initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl font-display text-[clamp(3rem,7vw,7rem)] font-bold leading-[.88] tracking-[-.065em]">{es ? "La solución" : "The solution"}<span className="block opacity-30">{es ? "no es siempre la misma." : "is never one-size-fits-all."}</span></motion.h2>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed opacity-65 md:text-base">{es ? "Combinamos capacidades y recursos según lo que cada negocio necesita. Elegimos herramientas existentes cuando resuelven bien el desafío; desarrollamos algo específico cuando hace falta." : "We combine capabilities and resources according to each business need. We use existing tools when they solve the challenge well, and build something specific when necessary."}</p>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 border-t border-black/15 sm:grid-cols-2 lg:grid-cols-3">{tools.map((tool, i) => <motion.div key={tool} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .035 }} className="flex min-h-24 items-center justify-between border-b border-black/15 py-6 sm:pr-7 lg:min-h-28"><span className="text-base font-medium tracking-[-.02em] md:text-lg">{tool}</span><span className="font-mono text-[9px] opacity-35">0{i + 1}</span></motion.div>)}</div>
        <p className="mt-8 font-mono text-[9px] uppercase tracking-[.16em] opacity-45">{es ? "La tecnología es un medio. La mejora del negocio es el objetivo." : "Technology is a means. Business improvement is the goal."}</p>
      </div>
    </section>
  );
}
export default Solutions;
