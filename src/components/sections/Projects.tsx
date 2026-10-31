import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import ProjectVisual from "../projects/ProjectVisual";

function Projects() {
  const { language } = useLanguage();
  const es = language === "es";
  const projects = [
    { number: es ? "Caso / 01" : "Case / 01", category: es ? "Gastronomía · Experiencia del cliente" : "Food service · Customer experience", title: "ORBIT", description: es ? "Una solución digital para mejorar la experiencia en restaurantes y conectar menú, pedidos, seguimiento y atención en una misma experiencia." : "A digital solution to improve restaurant experiences, connecting menus, orders, tracking and service." , image: "/images/projects/orbit.png" },
    { number: es ? "Caso / 02" : "Case / 02", category: es ? "Ecosistema comercial · Gastronomía" : "Commercial ecosystem · Food service", title: "Paraná Drink & Food", description: es ? "Una propuesta digital para conectar comercios, gastronomía y consumidores, y explorar nuevas formas de descubrir la oferta regional." : "A digital initiative connecting businesses, food service and consumers, exploring new ways to discover the regional offer.", image: "/images/projects/drink-food.png" },
  ];
  return (
    <section id="work" className="relative overflow-hidden bg-[var(--parana-black)] text-[var(--parana-white)]">
      <div className="mx-auto max-w-[1800px] px-5 py-24 md:px-8 md:py-32 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[.35fr_1fr]"><span className="font-mono text-[9px] uppercase tracking-[.18em] text-[var(--parana-gray)]">06 / {es ? "Proyectos" : "Selected work"}</span><div><motion.h2 initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl font-display text-[clamp(3rem,7vw,7rem)] font-bold leading-[.88] tracking-[-.06em]">{es ? "Ideas llevadas" : "Ideas brought"}<span className="block text-[var(--parana-gray)]">{es ? "a la práctica." : "into practice."}</span></motion.h2><p className="mt-7 max-w-xl text-sm leading-relaxed text-[var(--parana-gray)] md:text-base">{es ? "Algunos ejemplos de cómo convertimos oportunidades y necesidades en soluciones concretas." : "Examples of how opportunities and needs can become concrete solutions."}</p></div></div>
        <div className="mt-20 grid gap-16 lg:grid-cols-2">{projects.map((project, i) => <motion.article key={project.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8%" }} transition={{ duration: .65, delay: i * .08 }} className="group"><ProjectVisual type={project.title === "ORBIT" ? "orbit" : "food"} image={project.image} alt={project.title} /><div className="mt-6 flex items-center justify-between gap-4"><span className="font-mono text-[9px] uppercase tracking-[.16em] text-[var(--parana-gray)]">{project.number}</span><span className="text-right font-mono text-[9px] uppercase tracking-[.12em] text-[var(--parana-gray)]">{project.category}</span></div><h3 className="mt-5 font-display text-[clamp(2.5rem,4.5vw,4.8rem)] font-bold leading-none tracking-[-.06em] transition-colors group-hover:text-[var(--parana-accent)]">{project.title}</h3><p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--parana-gray)] md:text-base">{project.description}</p></motion.article>)}</div>
      </div>
    </section>
  );
}
export default Projects;
