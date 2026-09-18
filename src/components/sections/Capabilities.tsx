import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

function Capabilities() {
  const { language } = useLanguage();

  const t =
    language === "es"
      ? {
          label: "03 / Capacidades",
          titleLine1: "Una agencia.",
          titleLine2: "Muchas disciplinas.",
          items: [
            {
              number: "01",
              title: "Marca",
              description:
                "Identidad, estrategia y sistemas visuales construidos para hacer que una marca tenga una presencia clara.",
            },
            {
              number: "02",
              title: "Marketing",
              description:
                "Estrategia, campañas y comunicación pensadas para generar movimiento y construir relaciones.",
            },
            {
              number: "03",
              title: "Creadores",
              description:
                "Conectamos marcas con personas, comunidades y creadores capaces de generar conversación real.",
            },
            {
              number: "04",
              title: "Tecnología",
              description:
                "Productos digitales, plataformas y herramientas que convierten ideas en experiencias reales.",
            },
            {
              number: "05",
              title: "IA",
              description:
                "Inteligencia artificial aplicada para crear nuevas posibilidades, automatizar procesos y mejorar experiencias.",
            },
            {
              number: "06",
              title: "Experiencia",
              description:
                "Diseñamos experiencias que conectan espacios físicos, digitales, personas y marcas.",
            },
          ],
        }
      : {
          label: "03 / Capabilities",
          titleLine1: "One agency.",
          titleLine2: "Many disciplines.",
          items: [
            {
              number: "01",
              title: "Brand",
              description:
                "Identity, strategy and visual systems built to give brands a clear presence.",
            },
            {
              number: "02",
              title: "Marketing",
              description:
                "Strategy, campaigns and communication designed to create movement and build relationships.",
            },
            {
              number: "03",
              title: "Creators",
              description:
                "We connect brands with people, communities and creators capable of generating real conversation.",
            },
            {
              number: "04",
              title: "Technology",
              description:
                "Digital products, platforms and tools that turn ideas into real experiences.",
            },
            {
              number: "05",
              title: "AI",
              description:
                "Artificial intelligence applied to create new possibilities, automate processes and improve experiences.",
            },
            {
              number: "06",
              title: "Experience",
              description:
                "We design experiences that connect physical spaces, digital environments, people and brands.",
            },
          ],
        };

  return (
    <section className="relative overflow-hidden bg-[var(--parana-black)] text-[var(--parana-white)]">
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

        {/* Capabilities */}
        <div className="mt-24">
          {t.items.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.65,
                delay: index * 0.04,
              }}
              className="group relative border-t border-[var(--parana-line)] py-12 md:py-16 lg:py-20"
            >
              <div className="grid gap-8 md:grid-cols-[0.18fr_0.82fr]">
                <div className="flex items-start justify-between md:block">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--parana-gray)]">
                    {item.number}
                  </span>

                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--parana-gray)] md:hidden">
                    Paraná
                  </span>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end">
                  <h3 className="font-display text-[clamp(3rem,6vw,7rem)] font-bold leading-[0.85] tracking-[-0.06em] transition-colors duration-500 group-hover:text-[var(--parana-accent)]">
                    {item.title}
                  </h3>

                  <p className="max-w-md text-sm leading-relaxed text-[var(--parana-gray)] md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pointer-events-none absolute right-0 top-1/2 hidden h-2 w-2 -translate-y-1/2 rounded-full bg-[var(--parana-accent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:block" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Capabilities;