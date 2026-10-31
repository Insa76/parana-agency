import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

function Capabilities() {
  const { language } = useLanguage();
  const es = language === "es";
  const items = es ? [
    ["01", "Crecimiento comercial", "Identificamos oportunidades para fortalecer la propuesta comercial, llegar a nuevos clientes y desarrollar nuevas formas de vender."],
    ["02", "Eficiencia operativa", "Simplificamos tareas, mejoramos procesos y conectamos herramientas para que el trabajo cotidiano funcione mejor."],
    ["03", "Transformación digital", "Incorporamos soluciones tecnológicas que ayudan a modernizar la gestión y las operaciones."],
    ["04", "Experiencia del cliente", "Mejoramos los puntos de contacto, la atención, la comunicación y la relación con los clientes."],
    ["05", "Innovación y oportunidades", "Exploramos nuevas posibilidades de negocio, servicios, productos y modelos de relación."],
  ] : [
    ["01", "Commercial growth", "We identify opportunities to strengthen your offer, reach new customers and develop new ways to sell."],
    ["02", "Operational efficiency", "We simplify tasks, improve processes and connect tools so everyday work runs better."],
    ["03", "Digital transformation", "We introduce technology solutions that help modernize management and operations."],
    ["04", "Customer experience", "We improve touchpoints, service, communication and customer relationships."],
    ["05", "Innovation and opportunity", "We explore new possibilities for businesses, services, products and business models."],
  ];
  return (
    <section id="capabilities" className="relative overflow-hidden bg-[var(--parana-black)] text-[var(--parana-white)]">
      <div className="mx-auto max-w-[1800px] px-5 py-24 md:px-8 md:py-32 lg:px-10 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[.35fr_1fr]"><span className="font-mono text-[9px] uppercase tracking-[.18em] text-[var(--parana-gray)]">03 / {es ? "Qué impulsamos" : "What we improve"}</span>
          <motion.h2 initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl font-display text-[clamp(3rem,7vw,7rem)] font-bold leading-[.88] tracking-[-.06em]">{es ? "Desafíos reales." : "Real challenges."}<span className="block text-[var(--parana-gray)]">{es ? "Mejoras posibles." : "Practical progress."}</span></motion.h2>
        </div>
        <div className="mt-20">{items.map(([number, title, description], i) => <motion.article key={number} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8%" }} transition={{ duration: .55, delay: i * .04 }} className="group border-t border-[var(--parana-line)] py-10 md:py-14">
          <div className="grid gap-6 md:grid-cols-[.15fr_.85fr]"><span className="font-mono text-[10px] tracking-[.18em] text-[var(--parana-gray)]">{number}</span><div className="grid gap-5 lg:grid-cols-[1fr_.55fr] lg:items-end"><h3 className="font-display text-[clamp(2.5rem,5.5vw,5.8rem)] font-bold leading-[.9] tracking-[-.06em] transition-colors group-hover:text-[var(--parana-accent)]">{title}</h3><p className="max-w-md text-sm leading-relaxed text-[var(--parana-gray)] md:text-base">{description}</p></div></div>
        </motion.article>)}</div>
      </div>
    </section>
  );
}
export default Capabilities;
