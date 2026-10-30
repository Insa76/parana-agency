import { motion } from "framer-motion";
import { useLanguage } from "../../context/useLanguage";
import ProjectVisual from "../projects/ProjectVisual";

function Projects() {
  const { language } = useLanguage();

  const t =
    language === "es"
      ? {
          label: "06 / Hecho por Paraná",
          titleLine1: "No hablamos",
          titleLine2: "solamente de ideas.",
          project1: {
            number: "Proyecto 01",
            category: "Plataforma / Gastronomía",
            title: "Paraná Drink & Food",
            description:
              "Una plataforma para descubrir, recomendar y conectar con la escena gastronómica de la región.",
          },
          project2: {
            number: "Proyecto 02",
            category: "Tecnología / Hospitalidad",
            title: "ORBIT",
            description:
              "Tecnología para restaurantes y espacios gastronómicos. Una nueva forma de conectar mesas, clientes y equipos.",
          },
          project3: {
            number: "Proyecto 03",
            category: "Paraná Agency",
            title: "¿Qué sigue?",
            description:
              "Estamos construyendo nuevas ideas, productos y experiencias.",
          },
        }
      : {
          label: "06 / Made by Paraná",
          titleLine1: "We don't just talk",
          titleLine2: "about ideas.",
          project1: {
            number: "Project 01",
            category: "Platform / Gastronomy",
            title: "Paraná Drink & Food",
            description:
              "A platform to discover, recommend and connect with the region's food and drink scene.",
          },
          project2: {
            number: "Project 02",
            category: "Technology / Hospitality",
            title: "ORBIT",
            description:
              "Technology for restaurants and hospitality spaces. A new way to connect tables, guests and teams.",
          },
          project3: {
            number: "Project 03",
            category: "Paraná Agency",
            title: "What's next?",
            description: "We are building new ideas, products and experiences.",
          },
        };

  const projects = [
    {
      ...t.project1,
      type: "food" as const,
      image: "/images/projects/drink-food.png",
    },
    {
      ...t.project2,
      type: "orbit" as const,
      image: "/images/projects/orbit.png",
    },
    {
      ...t.project3,
      type: "future" as const,
      image: "/images/projects/future.png",
    },
  ];

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[var(--parana-black)] text-[var(--parana-white)]"
    >
      <div className="mx-auto max-w-[1800px] px-5 py-24 md:px-8 md:py-32 lg:px-10 lg:py-40">
        {/* Header */}
        <div className="grid gap-12 lg:grid-cols-[0.35fr_1fr]">
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--parana-gray)]">
            {t.label}
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl font-display text-[clamp(3rem,7vw,7rem)] font-bold leading-[0.88] tracking-[-0.055em]"
          >
            <span className="block">{t.titleLine1}</span>

            <span className="block text-[var(--parana-gray)]">
              {t.titleLine2}
            </span>
          </motion.h2>
        </div>

        {/* Projects */}
        <div className="mt-24 space-y-28 md:mt-32 md:space-y-40">
          {projects.map((project) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7 }}
            >
              <ProjectVisual
                type={project.type}
                image={project.image}
                alt={project.title}
              />

              {/* Information */}
              <div className="mt-7 grid gap-6 md:grid-cols-[0.18fr_0.82fr]">
                <div className="flex items-start justify-between md:block">
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--parana-gray)]">
                    {project.number}
                  </span>

                  <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-[var(--parana-gray)] md:mt-3 md:block">
                    {project.category}
                  </span>
                </div>

                <div className="grid gap-6 lg:grid-cols-[1fr_0.55fr] lg:items-end">
                  <h3 className="font-display text-[clamp(2.5rem,5vw,5.5rem)] font-bold leading-[0.88] tracking-[-0.055em]">
                    {project.title}
                  </h3>

                  <p className="max-w-md text-sm leading-relaxed text-[var(--parana-gray)]">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
